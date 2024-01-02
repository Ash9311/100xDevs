const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const isadmin = await Admin.findOne({ username, password });
    if (!isadmin) {
        req.status(404).json({ message: 'invalide username/password' });
        return;
    }
    if (isadmin) {
        next();
    }
}

module.exports = adminMiddleware;   