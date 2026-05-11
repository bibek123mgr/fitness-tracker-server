const mongoose = require("mongoose");

const NutritionSchema = new mongoose.Schema({

    meal_type: {
        type: String,
        required: true
    },
    food_item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    calories: {
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

module.exports = mongoose.model("Nutrition", NutritionSchema)