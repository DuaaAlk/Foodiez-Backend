const { mongoose, Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipeSchema = new Schema(
  {
    name: String,
    description: String,
    image: [String],
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  },
  { timestamps: true }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = model("Recipe", RecipeSchema);
