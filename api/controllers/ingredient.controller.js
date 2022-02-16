const Ingredient = require("../../models/Ingredient");

exports.fetchIngredient = async (req, res, next) => {
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
