const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config')
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    let token = req.headers.authorization.split(" ")[1]; //bcoz formate is like "bearer ey34fd...."
    try {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            req.username = decoded.username;
            next();
        })
    } catch (error) {
        res.status(404).json({ error: "Invalid credentials" });
        return;
    }
}

module.exports = adminMiddleware;   