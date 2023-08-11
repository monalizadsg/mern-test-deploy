const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.MONGO_URI;
mongoose.connect(URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// import routes
const bookRouter = require("../routes/activities.js");

// adding /books to before all routes
app.use("/activity", bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
