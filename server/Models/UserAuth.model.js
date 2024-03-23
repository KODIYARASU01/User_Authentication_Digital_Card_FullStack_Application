import mongoose from "mongoose";

let UserAuthSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      default:"https://img.freepik.com/free-vector/man-profile-account-picture_24908-81754.jpg?w=740&t=st=1711209817~exp=1711210417~hmac=fed4e99777f384563102540c2ed02d00eb19c260b831c01b9dd0734aa0010816",
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
