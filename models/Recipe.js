const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const RecipeSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    ingredient: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { timestamps: true }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Recipe", RecipeSchema);
