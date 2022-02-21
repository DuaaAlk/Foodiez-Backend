const express = require("express");
const upload = require("../../middleware/multer");

const {
  fetchCategories,
  createCategory,
  fetchSingleCategory,
  fetchCategoryWithRecepies,
} = require("../controllers/category.controller");

const router = express.Router();

router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchSingleCategory(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const err = new Error("category Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", fetchCategories);
router.get("/:categoryId", fetchCategoryWithRecepies);

router.post("/", upload.single("image"), createCategory);
// router.delete("/:categoryId", deleteCategory);
// router.put("/:categoryId", updateCategory);

module.exports = router;
