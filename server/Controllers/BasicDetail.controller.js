import BasicDetail from "../models/BasicDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.fullName || !req.body.profession) {
      return res
        .status(401)
        .json({ message: "Pls fillup required field:Fullname,Profession" });
    } else {
      let newData = new BasicDetail({
        user: req.user.id,
        banner: req.body.banner,
        logo: req.body.logo,
        fullName: req.body.fullName,
        profession: req.body.profession,
        summary: req.body.summary,
      });

      const result = await newData.save();

      return res
        .status(201)
        .json({ message: "Basic Detail sended Sucessfully", result });
    }
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Data Sending Failed" + err.message });
  }
};

export const getSpecificData = async (req, res) => {
  try {
    let { id } = req.params;
    const getData = await BasicDetail.findById(req.user._id);

    if (!getData) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({ message: "Data fetched Sucessfully", getData });
  } catch (err) {
    return res.status(401).json({ message: "Specific Data Fetching Failed" });
  }
};
export const getSpecificIdData = async (req, res) => {
  try {
    let { id } = req.params;
    const getData = await BasicDetail.findById(id);
    if (!getData) {
      return res.status(401).json({ message: "Details not found" });
    } else {
      return res
        .status(201)
        .json({ message: "Data fetched Sucessfully", getData });
    }
  } catch (err) {
    return res.status(401).json({ message: "Specific Data Fetching Failed" });
  }
};
export const getData = async (req, res) => {
  try {
    const result = await BasicDetail.find({ user: req.user.id });
    if (!result) {
      return res.status(401).json({ message: "Details not Found" });
    } else {
      return res
        .status(201)
        .json({ message: "Data fetched Sucessfully", result });
    }
  } catch (err) {
    return res.status(401).json({ message: "Data Fetching Failed" });
  }
};

export const updateData = async (req, res) => {
  try {
    let newData = {
      banner: req.body.banner,
      logo: req.body.logo,
      fullName: req.body.fullName,
      profession: req.body.profession,
      summary: req.body.summary,
    };
    let { id } = req.params;
    const result = await BasicDetail.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(401).json({ message: "Details Not found" });
    } else {
      return res.status(201).json({ message: "Data updated Sucessfully" });
    }
  } catch (err) {
    return res.status(401).json({ message: "Data Updating Failed" + err.message });
  }
};

export const deleteData = async (req, res) => {
  try {
    let { id } = req.params;
    let deleteDetail = await BasicDetail.findByIdAndDelete(id);
    if (!deleteDetail) {
      return res.status(401).json({ message: "Details not found" });
    }

    return res.status(201).json({ message: "Data deleted Sucessfully" });
  } catch (err) {
    return res.status(401).json({ message: "Detail delete failed" });
  }
};
