const { Schema, model, mongoose } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    description: String,
    recipes: [{ type: Schema.Types.ObjectId, ref: "Reciepe" }],
  },
  {
    timestamps: true,
  }
);
CategorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Category", CategorySchema);
