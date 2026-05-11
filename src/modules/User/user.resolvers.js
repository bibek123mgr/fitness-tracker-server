
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
        loginUser(parent, { email, name }, context) {
            const user = userService.userFindByEmailAddress(args);
            if (!user) {
                return GraphQLError({
                    message: "unauthorized"
                })
            }
            if (user.name == name) {
                return GraphQLError({
                    message: "unauthorized"
                })
            }
            const token = jwt.sign({
                user_id: user._id
            }, JWT_SECRET, {
                expiresIn: "7d"
            })
            return {
                status: true,
                message: "Login Successfully",
                token
            }
        }
    }
}

module.exports = userResolvers