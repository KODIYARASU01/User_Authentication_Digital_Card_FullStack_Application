import router from "../Routes/BasicDetail.router.js";
import ServiceDetails from '../Models/ServiceDetail.model.js'
export const postData = async (req, res) => {
  try {
    if (!req.body.serviceTitle || !req.body.serviceSummary) {
      return res.status(401).json({
        message: "Send all required fields :  serviceTitle, serviceSummary",
      });
    } else {
      let newData = new ServiceDetails({
        user: req.user.id,
        serviceImage: req.body.serviceImage,
        serviceTitle: req.body.serviceTitle,
        serviceSummary: req.body.serviceSummary,
      });

      let result = await newData.save();
      return res
        .status(201)
        .json({ message: "Data uploaded Sucessfully", result });
    }
  } catch (err) {
    return res.status(401).json({ message: "Data uploading Failed" });
  }
};

export const getData = async (req, res) => {
  try {
    let getServiceDetail = await ServiceDetails.find({ user: req.user.id });

    if (!getServiceDetail) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({ message: "Data fetched sucessfully", getServiceDetail });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};

export const getSpecificData = async (req, res) => {
  try {
    let { id } = req.params;
    let getServiceDetail = await ServiceDetails.findById(req.user.id);
    if (!getServiceDetail) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({ message: "Data fetched sucessfully", getServiceDetail });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};
export const getSpecificIdData = async (req, res) => {
  try {
    let { id } = req.params;
    let getServiceDetail = await ServiceDetails.findById(id);
    if (!getServiceDetail) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({
        message: "SpecificID Data fetched sucessfully",
        getServiceDetail,
      });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};
export const updateData = async (req, res) => {
  try {
    let { id } = req.params;
    let newData = new ServiceDetails({
      user: req.user.id,

      serviceImage: req.body.serviceImage,

      serviceTitle: req.body.serviceTitle,
      serviceSummary: req.body.serviceSummary,
    });
    let updateService = await ServiceDetails.findByIdAndUpdate(id, req.body);

    if (!updateService) {
      return res
        .status(401)
        .jason({ message: "Data not found that specific id" });
    }
    return res.status(201).json({ message: "Data updated sucessfully" });
  } catch (err) {
    return res.status(401).json({ message: "Data updating Failed" });
  }
};

export const deleteData = async (req, res) => {
  try {
    let id = req.params.id;

    let deleteData = await ServiceDetails.findByIdAndDelete(id);

    if (!deleteData) {
      return res
        .status(401)
        .json({ message: "Data not found that specific Id" });
    }

    return res.status(201).json({ message: "Data deleted sucessfully" });
  } catch (error) {
    return res.status(401).json({ message: "Data deleting Failed" });
  }
};

export default router;
