const express = require("express");
const upload = require("../../middleware/multer");
const {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  createRecipe,
} = require("../controllers/category.controller");

const router = express.Router();

router.get("", fetchCategories);
router.post("", upload.single("image"), createCategory);
router.delete("/:categoryId", deleteCategory);
router.put("/:categoryId", upload.single("image"), updateCategory);
router.post("/:categoryId/recipes", upload.single("image"), createRecipe);

module.exports = router;
