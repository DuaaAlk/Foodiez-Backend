const express = require("express");

const {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.get("", fetchCategories);
router.post("", createCategory);
router.delete("/:categoryId", deleteCategory);
router.put("/:categoryId", updateCategory);

module.exports = router;
