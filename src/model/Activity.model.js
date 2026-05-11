const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    calories_burned: {
        type: Number
    },
    goal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model("Activity", ActivitySchema)