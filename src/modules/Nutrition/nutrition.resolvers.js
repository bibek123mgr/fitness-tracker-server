const nutritionService = require("../../service/nutrition.service")
const nutritionMutation = {
    Query: {
        nutrition: (parent, { id }, { user_id }) => {
            if (!user_id) return null
            return nutritionService.nutritionFindById(id)
        },
        nutritions: (parent, args, { user_id }) => {
            if (!user_id) return null
            return nutritionService.findAllNutrition(user_id)
        }
    },
    Mutation: {
        createNutrition(parent, args, { user_id }) {
            if (!user_id) return null
            return nutritionService.createNutrition(args,user_id)
        },
        updateNutrition(parent, args, { user_id }) {
            if (!user_id) return null
            return nutritionService.updateNutrition(args)
        },
        deleteNutrition(parant, { id }, { user_id }) {
            if (!user_id) return null
            return nutritionService.deleteNutrition(id)
        }
    }
}

module.exports = nutritionMutation