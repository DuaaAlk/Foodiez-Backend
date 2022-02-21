const express = require("express");

const {
  fetchIngredients,
  createIngredient,
} = require("../controllers/ingredient.controller");

const router = express.Router();

router.get("/", fetchIngredients);
router.post("/", createIngredient);
// router.delete("/:categoryId", deleteIngredient);
// router.put("/:categoryId", updateIngredient);

module.exports = router;
