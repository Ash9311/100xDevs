const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

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
        res.status(403).json({ message: 'username already exists' })
    }
    else {
        const user = new User({ username, password });
        const savedUser = user.save();
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
        return res.status(200).json({ 'courses': courses });
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
    const user = req.username;
    if (user.purchasedCourses.includes(courseId)) {
        return res.status(409).json({ message: "course already purchased" });
    }
    const purchasedCourse = {
        id: courseId, title: 'course title',
        description: 'course description', price: 100,
        imageLink: 'https://linktoimage.com', published: true
    }
    user.purchasedCourses.push(purchasedCourse);
    return res.status(200).json({ message: "Course purhcased successfully" });

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const user = req.username;
    if (!user.purchasedCourses) {
        return req.status(404).json({ message: "user has no course purchased" });
    }
    return res.status(200).json({ 'purchasedCourses': user.purchasedCourses })
});
