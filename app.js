const express = require("express");
const connectDB = require("./index");
//Route import
const categoryRouter = require("./api/routers/category.router");
const ingredientRouter = require("./api/routers/ingredient.router");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});

//Routes Use
app.use("/categories", categoryRouter);
// app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/ingredients", ingredientRouter);

//Path not found middleware
app.use((req, res, next) => {
  res.status(404).json({ msg: "Path not found" });
});

//Error handeling middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ msg: err.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
  connectDB();
});
