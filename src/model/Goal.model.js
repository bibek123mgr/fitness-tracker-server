const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({

    goal_type: {
        type: String,
        required: true
    },
    target_weight: {
        type: Number,
        required: true
    },
    progress: {
        type: Number
    },
    deadline: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "completed", "abandoned"],
        default: "active"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model("Goal", GoalSchema)