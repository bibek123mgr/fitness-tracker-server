const activityService = require("../../service/activity.service")
const goalMutation = {
    Query: {
        goal: (parent, { id }) => {
            return activityService.activityFindById(id)
        },
        goals: () => {
            return activityService.findAllActivity()
        }
    },
    Mutation: {
        createGoal(parent, args) {
            return activityService.createActivity(args)
        },
        updateGoal(parent, args) {
            return activityService.updateActivity(args)
        },
        deleteGoal(parant, { id }) {
            return activityService.deleteActivity(id)
        }
    }
}