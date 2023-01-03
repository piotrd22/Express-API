const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbo = require("./db/connector");

app.listen(PORT, () => {
  dbo.connectToServer((error) => {
    if (error) console.error(error);
  });
  console.log(`Server is running on ${PORT}`);
});
