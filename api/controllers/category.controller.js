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
