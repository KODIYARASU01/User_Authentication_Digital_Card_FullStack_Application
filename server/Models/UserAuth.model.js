import mongoose from "mongoose";

let UserAuthSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2H7G6H7H7Z5G6m2_male-avatar-admin-profile%2F&psig=AOvVaw1BJjkHdso-f8uFRaRpQi_J&ust=1711257859642000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjg97rSiYUDFQAAAAAdAAAAABAF",
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
