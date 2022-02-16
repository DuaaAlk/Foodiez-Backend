const { Schema, model, mongoose } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const IngredientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Ingredient", IngredientSchema);
