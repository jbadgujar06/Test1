const Hospital = require("../Model/User");
module.exports.RenderRegister = (req, res) => {
  res.render("Signup");
};
module.exports.RenderLogin = (req, res) => {
  res.render("Login");
};
module.exports.RegisterHospital = (req, res) => {
  try {
    const {
      Hospital_name,
      Email,
      Address,
      Phone_no,
      City,
      Hospital_Regis_no,
      State,
      Emergency_no,
      Pincode,
      Hospital_Regis_Date,
      No_Of_Abulance,
      Password,
    } = req.body;
    qa;

    const file = req.files.file; // Get the file path from multer
    const path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log(path);
    file.mv(path);
    // Save form data to MongoDB
    const hospital = new Hospital({
      Hospital_name,
      Email,
      Address,
      Phone_no,
      City,
      Hospital_Regis_no,
      State,
      Emergency_no,
      Pincode,
      Hospital_Regis_Date,
      No_Of_Abulance,
      Password,
      file: file.name,
    });
    hospital.save();
    // console.log(name + " " + rollno);
    res.render("login");
    res.status(201).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
module.exports.AuthLogin = (req, res) => {
  // res.render("Registration_com");
  // setTimeout(() => {
  //   res.redirect("Show_Hospital");
  // }, 3000);
  res.render("Show_Hospital");
};
