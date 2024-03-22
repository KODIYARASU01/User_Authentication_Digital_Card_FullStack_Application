import mongoose from "mongoose";

let UserAuthSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      default:"https://www.vecteezy.com/png/28169693-3d-icons-occupation-job-avatar-for-social-media-profile-pictures",
    },
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      min: 1,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    location: {
      type: String,
    },
    mobileNumber: {
      type: String,
      min: 10,
    },
  },
  { timestamps: true }
);

let UserAuth = mongoose.model("UserAuth", UserAuthSchema);

export default UserAuth;
