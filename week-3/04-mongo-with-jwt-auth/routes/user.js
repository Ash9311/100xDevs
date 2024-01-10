const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

const userNameExists = async (username) => {
    const foundUser = User.findOne({ username });
    return foundUser ? true : false;
}

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    if (await userNameExists) {
        res.status(403).json({ message: "username already exists" });
        return;
    }
    res.status(201).json({ message: "user created" });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({ username, password });
    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.status(200).json({ message: token })
    }
    else {
        res.status(411).json({ message: "incorrect username/password" });
        return;
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    if (!courses) {
        res.status(404).json({ message: "No course found" });
        return;
    }
    res.status(200).json({ courses });

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const course = await Course.findById({})
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
module.exports = router;