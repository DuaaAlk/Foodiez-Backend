const express = require("express");
const upload = require("../../middleware/multer");
const {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.get("", fetchCategories);
router.post("", upload.single("image"), createCategory);
router.delete("/:categoryId", deleteCategory);
router.put("/:categoryId", upload.single("image"), updateCategory);

module.exports = router;
