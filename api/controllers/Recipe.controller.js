const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");
const Ingredient = require("../../models/Ingredient");
const { populate } = require("../../models/Category");

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
    const recipe = await Recipe.findById(recipeId).populate([
      "ingredient",
      "category",
    ]);
    return recipe;
  } catch (error) {
    next(error);
  }
};

exports.fetchRecipeDetails = async (req, res) => {
  res.json(req.recipe);
};

exports.CreateRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}${req.file.path}`;
      console.log(req.body);
      const newRecipe = await Recipe.create(req.body);

      if (req.body.ingredient.length > 0) {
        req.body.ingredient.forEach(
          async (ing) =>
            await Ingredient.findOneAndUpdate(
              { _id: ing },
              { $push: { recipes: newRecipe._id } }
            )
        );
      }
      if (req.body.category) {
        await Category.findOneAndUpdate(
          { _id: req.body.category },
          { $push: { recipes: newRecipe._id } }
        );
      }
      return res.status(201).json(newRecipe);
    }
  } catch (error) {
    next(error);
  }
};
