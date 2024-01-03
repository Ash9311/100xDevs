const { jwt } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization.split(" ")[1];
    try {
        JWT_SECRET.verify(token, JWT_SECRET, (err, decoded) => {
            req.username = decoded.username;
            next();
        })
    } catch (error) {
        res.status(404).json({ error: "invalid credentials" });
        return;
    }
}

module.exports = userMiddleware;