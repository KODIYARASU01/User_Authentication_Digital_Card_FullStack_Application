// import router from "../Routes/BasicDetail.router.js";
import QRCodeDetails from  '../Models/QRCodeDetail.model.js'
export const postData = async (req, res) => {
  try {
    if (!req.body.QRCodeImage) {
      return res.status(401).json({
        message: "Send all required fields : QRCodeImage",
      });
    }
    let newData = new QRCodeDetails({
      user: req.user.id,
      QRCodeImage: req.body.QRCodeImage,
    });

    let result = await newData.save();

    return res.status(201).json({ message: "Image upload sucessfully", result });
  } catch (err) {
    return res.status(401).json({ message: "Image uploading Failed" });
  }
};

export const getData = async (req, res) => {
  try {
    let getQRCodeDetails = await QRCodeDetails.find({ user: req.user.id });
    if (!getQRCodeDetails) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({ message: "Data fetched Sucessfully", getQRCodeDetails });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};

export const getSpecificData = async (req, res) => {
  try {
    let getQRCodeDetails = await QRCodeDetails.findById(req.user.id);

    if (!getQRCodeDetails) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({ message: "Data fetching sucessfully", getQRCodeDetails });
  } catch (err) {
    return res.status(401).send("Specific Data Fetching failed" + err.message);
  }
};
export const getSpecificIdData = async (req, res) => {
  let {id}=req.params
  try {
    let getQRCodeDetails = await QRCodeDetails.findById(id);

    if (!getQRCodeDetails) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({ message: "Data fetching sucessfully", getQRCodeDetails });
  } catch (err) {
    return res.status(401).send("Specific Data Fetching failed" + err.message);
  }
};
export const updateData = async (req, res) => {
  try {
    let { id } = req.params;

    let updateQRCode = await QRCodeDetails.findByIdAndUpdate(id, req.body);

    if (!updateQRCode) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res.status(201).json({ message: "Data updated Sucessfully" });
  } catch (err) {
    return res.status(401).json({ message: "Data updating Failed" });
  }
};

export const deleteData = async (req, res) => {
  try {
    let id = req.params.id;

    let deleteData = await QRCodeDetails.findByIdAndDelete(id);

    if (!deleteData) {
      return res.status(401).json({ message: "Details not found" });
    }

    return res.status(201).json({ message: "Data deleted Sucessfully" });
  } catch (error) {
    return res.status(401).json({ message: "Data deleting Failed" });
  }
};

// export default router;
