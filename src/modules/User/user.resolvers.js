
const { GraphQLError } = require("graphql/error")
const userService = require("../../service/user.service")
const { JWT_SECRET } = require("../../config")
const jwt = require("jsonwebtoken")
const userResolvers = {
    Query: {
        user: (parent, { id }) => {
            return userService.userFindById(id)
        },
        users: () => {
            const allusers = userService.findAllUser()
            console.log(allusers)
            return allusers
        }
    },
    Mutation: {
        createUser(parent, args) {
            return userService.createUser(args)
        },
        updateUser(parent, args, context) {
            return userService.updateUser(args)
        },
        deleteUser(parent, { id }, context) {
            return userService.deleteUser(id)
        },
        async loginUser(parent, { email, password }, context) {
            const user = await userService.userFindByEmailAddress(email, password);
            if (!user) {
                return {
                    success: false,
                    message: "Unauthorized",
                    token:""
                }
            }
            const token = jwt.sign({
                user_id: user._id
            }, JWT_SECRET, {
                expiresIn: "7d"
            })
            return {
                success: true,
                message: "Login Successfully",
                token
            }
        }
    }
}

module.exports = userResolvers