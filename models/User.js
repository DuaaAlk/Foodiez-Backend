const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      validate(value) {
        return !value.toLowerCase().includes("event");
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      LowerCase: true,
      validate: [validEmail, "please add a valid Email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("User", UserSchema);
