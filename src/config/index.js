require("dotenv").config()

const {
    MONGO_URL,
    PORT,
    JWT_SECRET
} = process.env


module.exports= {
    MONGO_URL,
    PORT,
    JWT_SECRET
}