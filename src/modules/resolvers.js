const { mergeResolvers } = require("@graphql-tools/merge");
const userResolvers = require("./User/user.resolvers");
const GoalResolvers = require("./Goal/goal.resolvers")
const ActivityResolvers = require("./Activity/activity.resolvers")
const NutritionResolvers = require("./Nutrition/nutrition.resolvers")


const resolvers = mergeResolvers([
    userResolvers,
    GoalResolvers,
    ActivityResolvers,
    NutritionResolvers
])

module.exports = resolvers