const Category = require("../../models/Category");
const { updateIngredient } = require("./ingredient.controller");

exports.fetchCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
      console.log(req.body.image);
    }
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    // const { category } = req.params;
    // console.log(category);
    // console.log(req.category);
    // console.log(req.params.categoryId);
    const deletedCategory = await Category.findByIdAndDelete(
      req.params.categoryId
    );
    if (deletedCategory)
      res.status(404).json({
        msg: "Category deleted succesfully",
        payload: deletedCategory,
      });
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = req.body;
    const { categoryId } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      category
    );
    if (updatedCategory)
      res.status(404).json({
        msg: "Category updated succesfully",
        payload: updatedCategory,
      });
  } catch (error) {
    next(error);
  }
};

exports.createRecipe = async (req, res, next) => {
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
