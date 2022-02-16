const { Schema, model, mongoose } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const IngredientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    unit: String,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);
IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Ingredient", IngredientSchema);
