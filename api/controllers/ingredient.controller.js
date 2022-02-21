const Ingredient = require("../../models/Ingredient");

exports.fetchIngredients = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.find();
    res.json(ingredient);
  } catch (error) {
    next(error);
  }
};

exports.createIngredient = async (req, res, next) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    res.json(newIngredient);
  } catch (error) {
    next(error);
  }
};

exports.deleteIngredient = async (req, res, next) => {
  try {
    const { ingredient } = req.params;
    const deletedIngredient = await Ingredient.findByIdAndDelete(ingredient);
    if (deletedIngredient)
      res.status(404).json({
        msg: "Ingredient deleted succesfully",
        payload: deletedIngredient,
      });
  } catch (error) {
    next(error);
  }
};

exports.updateIngredient = async (req, res, next) => {
  try {
    const { ingredient } = req.body;
    const { ingredientId } = req.params;
    const updatedIngredient = await Ingredient.findByIdAndUpdate(
      ingredientId,
      ingredient
    );
    if (updatedIngredient)
      res.status(404).json({
        msg: "Ingredient updated succesfully",
        payload: updatedIngredient,
      });
  } catch (error) {
    next(error);
  }
};
