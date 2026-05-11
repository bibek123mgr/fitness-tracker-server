const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/index");

const Auth = (req) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return null;
        }

        const token = authHeader.split(" ")[1];
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null;
    }
};

module.exports = Auth;