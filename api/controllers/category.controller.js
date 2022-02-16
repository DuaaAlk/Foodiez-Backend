const Category = require("../../models/Category");

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
    const { category } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(category);
    if (deletedCategory)
      res.status(404).json({
        msg: "Ingredient deleted succesfully",
        payload: deletedCategory,
      });
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    const { categoryId } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      category
    );
    if (updatedCategory)
      res.status(404).json({
        msg: "Ingredient updated succesfully",
        payload: updatedIngredient,
      });
  } catch (error) {
    next(error);
  }
};
