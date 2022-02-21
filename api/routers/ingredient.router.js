const express = require("express");

const {
  fetchIngredient,
  createIngredient,
  deleteIngredient,
} = require("../controllers/ingredient.controller");

const router = express.Router();

router.get("", fetchIngredient);
router.post("", createIngredient);
router.delete("/:ingredientId", deleteIngredient);

module.exports = router;
