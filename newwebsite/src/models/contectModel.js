import mongoose from "mongoose";

const contectScema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide a Email"],
  },
  name: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  country: {
    type: String,
  },
  companysize: {
    // Add company size field
    type: String,
    enum: ["Small", "Medium", "Large"], // Define dropdown options
    // required: true,
  },

  privacy_polocy: {
    type: Boolean,
    // require: true,
    default: true,
  },
});

const ContectInfo =
  mongoose.models.ContectInfos || mongoose.model("contectinfo", contectScema);

export default ContectInfo;
