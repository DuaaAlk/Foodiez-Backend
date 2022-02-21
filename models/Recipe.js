const { mongoose, Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipeSchema = new Schema(
  {
    name: String,
    instructions: String,
    image: [String],
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = model("Recipe", RecipeSchema);
