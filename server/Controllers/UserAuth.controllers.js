import UserAuth from "../Models/UserAuth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//Creating data to database :

//Registering data
export const postRegister = async (req, res) => {
  try {
    let { firstName, lastName, email, password, location, mobileNumber } =
      req.body;
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.password
    ) {
      return res.status(500).json({
        message:
          "Required:FirstName,Email,Password",
      });
    }

    let findUser = await UserAuth.findOne({ email: email });

    if (findUser) {
      return res.status(500).json({
        message: "User Already Exist",
      });
    } else {
      //Hashing our password:
      let hashingPassword = await bcrypt.hash(password, 10);
      let register = new UserAuth({
        firstName,
        lastName,
        email,
        password: hashingPassword,
        location,
        mobileNumber,
      });

      await register.save();

      return res
        .status(201)
        .json({ message: "User Registered Sucessfully", register });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Login Data:

export const postLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!req.body.email || !req.body.password) {
      return res.status(500).json({
        message: "Required :Email,Password",
      });
    }
    //Find User with specific email:
    let User = await UserAuth.findOne({ email: email });
    if (!User) return res.status(500).json({ message: "User Not Exist" });

    //Password checking:
    let passwordMatch = await bcrypt.compare(password, User.password);
    if (!passwordMatch)
      return res.status(500).json({ message: "Wrong Credential" });

    //Creating Token :
    let Token = jwt.sign({ id: User._id }, process.env.SECRET_JWT_KEY);
    delete User.password;
    return res
      .status(201)
      .json({ message: "User Logined Sucessfully", Token, User });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
