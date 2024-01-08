const express = require("express");
const path = require("path");
const app = express();
const ejsMate = require("ejs-mate");
const hospital = require("./Controllers/Hospital");
var bodyParser = require("body-parser");
const multer = require("multer");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 10 * 1024 * 1024 },
});
app.use(express.json());
app.use(fileupload());
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));

// app.use(express.bodyParser());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get("/Signup", hospital.RenderRegister);
app.post("/Signup", hospital.RegisterHospital);
app.get("/login", hospital.RenderLogin);
app.post("/login", hospital.AuthLogin);
// app.get("/showhospital", showHospital);
app.get("/", (req, res) => {
  res.render("Signup");
});
const db = mongoose
  .connect("mongodb://127.0.0.1:27017/test1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((req, res) => {
    console.log("db connected");
  });
app.listen(3000, () => {
  console.log("server started on 3000");
});
