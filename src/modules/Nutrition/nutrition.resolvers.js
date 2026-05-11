const nutritionService = require("../../service/nutrition.service")
const goalMutation = {
    Query: {
        goal: (parent, { id }) => {
            return nutritionService.nutritionFindById(id)
        },
        goals: () => {
            return nutritionService.findAllNutrition()
        }
    },
    Mutation: {
        createGoal(parent, args) {
            return nutritionService.createNutrition(args)
        },
        updateGoal(parent, args) {
            return nutritionService.updateNutrition(args)
        },
        deleteGoal(parant, { id }) {
            return nutritionService.deleteNutrition(id)
        }
    }
}