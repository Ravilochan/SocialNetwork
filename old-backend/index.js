const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();

const { MONGOURI } = require("./keys");
const PORT = process.env.PORT || 3000;

require("./models/user");
require("./models/post");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", () => {
  console.log("Error Connecting to the MongoDb");
});

app.listen(PORT, () =>
  console.log(`Server Started at : http://localhost:${PORT}`)
);
