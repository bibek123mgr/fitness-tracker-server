
const goalService = require("../../service/goal.service")
const goalMutation = {
    Query: {
        goal: (parent, { id },  { user_id }) => {
            if (!user_id) {
                return
            }
            return goalService.goalFindById(id)
        },
        goals: (parent, args, { user_id }) => {
            if (!user_id) {
                return
            }
            return goalService.findAllGoal(user_id)
        }
    },
    Mutation: {
        createGoal(parent, args, {user_id}) {
            if (!user_id) {
                return
            }
            return goalService.createGoal(args,user_id)
        },
        updateGoal(parent, args, {user_id}) {
             if (!user_id) {
                return
            }
            return goalService.updateGoal(args)
        },
        deleteGoal(parant, { id }, {user_id}) {
             if (!user_id) {
                return
            }
            return goalService.deleteGoal(id)
        }
    }
}

module.exports = goalMutation