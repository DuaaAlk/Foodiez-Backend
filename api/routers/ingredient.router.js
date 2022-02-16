const express = require("express");

const {
  fetchIngredient,
  createIngredient,
  deleteIngredient,
  updateIngredient,
} = require("../controllers/ingredient.controller");

const router = express.Router();

router.get("", fetchIngredient);
router.post("", createIngredient);
router.delete("/:categoryId", deleteIngredient);
router.put("/:categoryId", updateIngredient);

module.exports = router;
