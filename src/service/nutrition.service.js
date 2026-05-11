
const Nutrition = require("../model/Nutrition.model")


const nutritionFindById = async (id) => {
    return await Nutrition.findById(id);
}

const findAllNutrition = async () => {
    return await Nutrition.find()
}

const createNutrition = async (data) => {
    const { meal_type, food_item, quantity, calories, user,goal } = data
    return Nutrition.create({
        meal_type, food_item, quantity, calories, user,goal
    })
}

const updateNutrition = async (data) => {
    const { id, meal_type, food_item, quantity, calories, user } = data
    return Nutrition.findByIdAndUpdate(id, {
        id, meal_type, food_item, quantity, calories, user
    }, { new: true })
}

const deleteNutrition = async (id) => {
    return Nutrition.findByIdAndDelete(id)
}

module.exports = {
    nutritionFindById,
    findAllNutrition,
    createNutrition,
    updateNutrition,
    deleteNutrition
}