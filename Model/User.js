const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HospitalSchema = new Schema({
  Hospital_name: String,
  Email: String,
  Address: String,
  Phone_no: Number,
  City: String,
  Hospital_Regis_no: String,
  State: String,
  Emergency_no: Number,
  Pincode: Number,
  Hospital_Regis_Date: Date,
  No_Of_Abulance: Number,
  Password: String,
  file: String,
});
module.exports = mongoose.model("Hospital", HospitalSchema);
