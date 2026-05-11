const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema)