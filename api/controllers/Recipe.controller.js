const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");

exports.fetchListRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.find();
    return res.json(recipe);
  } catch (error) {
    next(error);
  }
};

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findbyId(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};
