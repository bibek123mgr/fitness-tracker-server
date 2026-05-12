const { model } = require("mongoose");
const User = require("../model/User.model.js")


const userFindById = async (id) => {
    return await User.findById(id);
}

const userFindByEmailAddress = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) return null;
    const isMatch = user.comparePassword(password)
    if (!isMatch) return null;
    return user;
}

const findAllUser = async () => {
    return await User.find()
}

const createUser = async (data) => {
    const { name, email, age, gender, height, weight, password } = data
    return User.create({
        name, email, age, gender, height, weight, password
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

module.exports = {
    userFindById,
    userFindByEmailAddress,
    findAllUser,
    createUser,
    updateUser,
    deleteUser
}