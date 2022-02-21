const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "missing name field"],
    },
    image: { type: String, required: [true, "missing image"] },
    description: { type: String, required: [true, "missing description"] },
    recipes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: false },
    ],
  },
  {
    timestamps: true,
  }
);
CategorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Category", CategorySchema);
