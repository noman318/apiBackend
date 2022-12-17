const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// db connection
const connectionString = "mongodb://localhost:27017/mongoAPI";
mongoose
  .connect(connectionString)
  .then((res) => console.log("Database connected successfully"))
  .catch((err) => console.log("Error : " + err));
//db end
const mainRoutes = require("./index");
app.use("/", mainRoutes);
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Work On ${PORT}`);
});
