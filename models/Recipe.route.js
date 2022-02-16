const express = require("express");
const router = express.Router;
const upload = require("../middleware/multer");

const {
  fetchListRecipe,
  fetchRecipe,
  CreateRecipe,
} = require("./Recipe.controller");

router.param("recipeId", async (req, res, next, recipeId) => {
  const recipe = await fetchRecipe(recipeId, next);
  if (recipe) {
    req.recipe = recipe;
    next();
  } else {
    const err = new Error("Recipe Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", fetchListRecipe);
router.get("/:recipeId", fetchRecipe);
router.post("/:recipeId", upload.single("image"), CreateRecipe);

moudule.exports = router;
