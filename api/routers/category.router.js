const express = require("express");
const upload = require("../../middleware/multer");
const Category = require("../../models/Category");
const {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  createRecipe,
  fetchCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.param("categoryId", async (req, res, next, categoryId) => {
  console.log(categoryId);
  const category = await fetchCategory(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const err = new Error("Category Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("", fetchCategories);
router.post("", upload.single("image"), createCategory);
router.delete("/:categoryId", deleteCategory);
router.put("/:categoryId", upload.single("image"), updateCategory);
router.post("/:categoryId/recipes", upload.single("image"), createRecipe);

module.exports = router;
