
const Activity = require("../model/Activity.model")


const activityFindById = async (id) => {
    return await Activity.findById(id);
}

const findAllActivity = async (user) => {
    return await Activity.find()
}

const createActivity = async (data,user) => {
    const {type,duration,distance,calories_burned,goal } = data
    return Activity.create({
       type,duration,distance,calories_burned, user,goal
    })
}

const updateActivity = async (data) => {
    const { id,type,duration,distance,calories_burned, user } = data
    return Activity.findByIdAndUpdate(id, {
        id,type,duration,distance,calories_burned, user
    }, { new: true })
}

const deleteActivity = async (id) => {
    return Activity.findByIdAndDelete(id)
}

module.exports = {
    activityFindById,
    findAllActivity,
    createActivity,
    updateActivity,
    deleteActivity
}