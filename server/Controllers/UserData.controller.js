import UserAuth from "../Models/UserAuth.model.js";

//Get UserDetails:
export const getUserData = async (req, res) => {
  try {
    let { id } = req.params;

    let getUserData = await UserAuth.findById(id);
    res.status(201).json({ getUserData: getUserData ,message:'Profile date Fetched'});
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

//Update UserDetails:

export const updateUserData = async (req, res) => {
  try {
    let { firstName, lastName, email, password, location, mobileNumber,profile } =
      req.body;

    let { id } = req.params;
    let data = {
      profile,
      firstName,
      lastName,
      email,
      password,
      location,
      mobileNumber,
    };
    let putUserData = await UserAuth.findByIdAndUpdate(id, data);
    res
      .status(201)
      .json({
        putUserData: putUserData,
        message: "Profile Updated Sucessfully",
      });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};
