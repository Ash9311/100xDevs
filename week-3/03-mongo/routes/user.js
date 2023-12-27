const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const usernameExists = async (username) => {
    const foundUser = await User.findOne({ username });
    return foundUser ? true : false;
}

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    if (await usernameExists(username)) {
        res.status(403).json({ message: 'username already exists' });
        return;
    }
    else {
        const user = new User({ username, password });
        const savedUser = await user.save();
        res.status(201).json({ message: 'User created successfully' })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    if (!courses) {
        res.status(404).json({ message: 'not found' });
        return;
    }
    else {
        res.status(200).json({ 'courses': courses });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    if (!course) {
        res.status(404).json({ message: `course ${courseId} not found` });
        return;
    }
    const username = req.headers.username;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            res.status(404).json({ message: `User ${username} not found` });
            return;
        }
        if (user.purchasedCourses && user.purchasedCourses.includes(courseId)) {
            return res.status(409).json({ message: "course already purchased" });
        }
        const purchasedCourse = {
            id: course.id,
            title: course.title,
            description: course.description,
            price: course.price,
            imageLink: course.imageLink
        }
        user.purchasedCourses.push(purchasedCourse);
        const savedUser = await user.save();
        res.status(201).json({ message: "Course purchased successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "server error" });
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({ username });
    if (!user) {
        res.status(404).json({ message: `user ${username} not found` })
        return;
    }
    const purchasedCourses = user.purchasedCourses;
    return res.status(200).json({ 'purchasedCourses': user.purchasedCourses })
});


module.exports = router;