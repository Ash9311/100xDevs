const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
// Admin Routes

const userNameExists = async (username) => {
    const foundAdmin = await Admin.findOne({ username });
    return foundAdmin ? true : false;
}

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    if (await userNameExists) {
        res.status(403).json({ message: "username already exists" })
    }
    const admin = new Admin({ username, password });
    const savedAdmin = admin.save();
    return res.status(201).json({ message: 'User created successfully' })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({ username, password });
    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
    }
    else {
        res.status(411).json({ message: "Incorrect email/password" })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const course = new Course({
        title,
        description,
        price,
        imageLink
    })
    try {
        const savedCourse = course.save();
        return res.status(201).json({ msg: "Course created successfully", courseId: savedCourse._id })
    } catch (error) {
        res.status(4004).json({ message: "error in creating" });
        return;
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    if (!courses) {
        res.status(400).send({ message: "no course found" });
        return;
    }
    res.status(200).json({ courses });
});

module.exports = router;