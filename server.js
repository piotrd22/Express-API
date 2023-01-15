const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DATABASE_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));

const productRouter = require("./routes/product");

app.use("/products", productRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_URI, () => {
    console.log("Connected with DB! :)");
  })
  .catch((err) => console.log(err.reason));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
