const Ingredient = require("../../models/Ingredient");
const Recipe = require("../../models/Recipe");

exports.fetchIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};

exports.fetchSingleIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findById(ingredientId);
    res.json(ingredient);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    await Recipe.findByIdAndUpdate(
      { _id: req.params.recipe.id },
      { $push: { ingredients: newIngredient._id } }
    );
    return res.json(newIngredient);
  } catch (error) {
    next(error);
  }
};

exports.deleteIngredient = async (req, res, next) => {
  try {
    console.log(req.params.ingredientId);
    const deletedIngredient = await Ingredient.findByIdAndDelete(
      req.params.ingredientId
    );
    if (deletedIngredient)
      res.status(404).json({
        msg: "Ingredient deleted succesfully",
        payload: deletedIngredient,
      });
  } catch (error) {
    next(error);
  }
};
