
const goalService = require("../../service/goal.service")
const goalMutation = {
    Query: {
        goal: (parent, { id }) => {
            return goalService.goalFindById(id)
        },
        goals: () => {
            return goalService.findAllGoal()
        }
    },
    Mutation: {
        createGoal(parent, args) {
            return goalService.createGoal(args)
        },
        updateGoal(parent, args) {
            return goalService.updateGoal(args)
        },
        deleteGoal(parant, { id }) {
            return goalService.deleteGoal(id)
        }
    }
}

module.exports=goalMutation