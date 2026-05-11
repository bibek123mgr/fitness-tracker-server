
const Goal = require("../model/Goal.model")


const goalFindById = async (id) => {
    return await Goal.findById(id);
}


const findAllGoal = async () => {
    return await Goal.find()
}

const createGoal = async (data) => {
    const { goal_type, target_weight, progress, deadline, user } = data
    console.log(data)
    return Goal.create({
        goal_type, target_weight, progress, deadline, user
    })
}

const updateGoal = async (data) => {
    const { id, goal_type, target_weight, progress, deadline, user } = data
    return Goal.findByIdAndUpdate(id, {
        id, goal_type, target_weight, progress, deadline, user
    }, { new: true })
}

const deleteGoal = async (id) => {
    return Goal.findByIdAndDelete(id)
}

module.exports = {
    goalFindById,
    findAllGoal,
    createGoal,
    updateGoal,
    deleteGoal
}