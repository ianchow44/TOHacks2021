const express = require("express");
const cors = require("cors");
require("dotenv").config();

// setup for express

const app = express();

// choose between local and
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});

// setup routes

const visionRouter = require("./routes/vision.js");
app.use("/vision", visionRouter);
