const { model } = require("mongoose");
const User = require("../model/User.model.js")


const userFindById = async (id) => {
    return await User.findById(id);
}

const userFindByEmailAddress = async (email) => {
    return await User.findOne({ email });
}

const findAllUser = async () => {
    return await User.find()
}

const createUser = async (data) => {
    const { name, email, age, gender, height, weight } = data
    return User.create({
        name, email, age, gender, height, weight
    })
}

const updateUser = async (data) => {
    const { id, name, email, age, gender, height, weight } = data
    return User.findByIdAndUpdate(id, {
        id, name, email, age, gender, height, weight
    }, { new: true })
}

const deleteUser = async (id) => {
    return User.findByIdAndDelete(id)
}

module.exports={
    userFindById,
    userFindByEmailAddress,
    findAllUser,
    createUser,
    updateUser,
    deleteUser
}