const Recipe = require("./Recipe");

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

exports.CreateRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}${req.file.path}`;

      const categoryId = req.params.categoryId;
      req.body = { ...req.body, category: categoryId };
      const newRecipe = await Recipe.create(req.body);
      await Category.findOneAndUpdate(
        { _id: req.params.categoryId },
        { $push: { recipes: newRecipe._id } }
      );
      return res.status(201).json(newRecipe);
    }
  } catch (error) {
    next(error);
  }
};
