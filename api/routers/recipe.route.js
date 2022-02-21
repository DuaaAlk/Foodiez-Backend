const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

const {
  fetchListRecipe,
  fetchRecipe,

  CreateRecipe,
  fetchRecipeDetails,
} = require("../controllers/Recipe.controller");

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

router.get("/:recipeId", fetchRecipeDetails);
router.post("/", upload.single("image"), CreateRecipe);

router.get("/:recipeId", fetchRecipe);

module.exports = router;
