const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// Middleware for parsing request body
app.use(express.json());

const contactRoute = require("./routes/contactRouter");
app.use("/contact", contactRoute);

// Connexion à la base de données
const MONGO_URI = "mongodb://localhost:27017/mernDbCourse";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
