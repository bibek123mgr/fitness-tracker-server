const activityService = require("../../service/activity.service")
const activityMutation = {
    Query: {
        activity: (parent, { id }, { user_id }) => {
            if (!user_id) return null
            return activityService.activityFindById(id)
        },
        activities: (parent, args, { user_id }) => {
            if (!user_id) return null
            return activityService.findAllActivity()
        }
    },
    Mutation: {
        createActivity(parent, args, { user_id }) {
            console.log(user_id)
            if (!user_id) return null
            return activityService.createActivity(args,user_id)
        },
        updateActivity(parent, args, { user_id }) {
            if (!user_id) return null
            return activityService.updateActivity(args)
        },
        deleteActivity(parant, { id }, { user_id }) {
            if (!user_id) return null
            return activityService.deleteActivity(id)
        }
    }
}

module.exports=activityMutation