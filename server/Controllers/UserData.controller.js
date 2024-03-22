import UserAuth from "../Models/UserAuth.model.js";

export const getUserData = async (req, res) => {
  try {
    let { id } = req.params;

    let getUserData = await UserAuth.findById(id);
    res.status(201).json({getUserData:getUserData});
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};
