import router from "../Routes/BasicDetail.router.js";
import GalleryDetails from '../Models/GalleryDetail.model.js'
export const postData = async (req, res) => {
  try {
    if (!req.body.galleryImage) {
      return res.status(401).json({
        message: "Send all required fields : galleryImage",
      });
    }
    let newData = new GalleryDetails({
      user: req.user.id,
      galleryImage: req.body.galleryImage,
      videoURL: req.body.videoURL,
    });

    let result = await newData.save();

    return res.status(201).json({ message: "Data upload sucessfully",result });
  } catch (err) {
    return res.status(401).json({ message: "Data uploading Failed" });
  }
};

export const getData = async (req, res) => {
  try {
    let getGalleryDetail = await GalleryDetails.find({ user: req.user.id });
    if (!getGalleryDetail) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res.status(201).json({ message: "Data fetched Sucessfully",getGalleryDetail });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};

export const getSpecificData = async (req, res) => {
  try {
    let { id } = req.params;
    let getGalleryDetail = await GalleryDetails.findById(req.user.id);

    if (!getGalleryDetail) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res.status(201).json({ message: "Data fetching sucessfully",getGalleryDetail });
  } catch (err) {
    return res.status(401).send("Specific Data Fetching failed" + err.message);
  }
};

export const getSpecificIdData = async (req, res) => {
  try {
    let { id } = req.params;
    let getGalleryDetail = await GalleryDetails.findById(id);

    if (!getGalleryDetail) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res.status(201).json({ message: "Data fetching sucessfully",getGalleryDetail });
  } catch (err) {
    return res.status(401).send("Specific Data Fetching failed" + err.message);
  }
};
export const updateData = async (req, res) => {
  try {
    let { id } = req.params;

    let updateGallery = await GalleryDetails.findByIdAndUpdate(id, req.body);

    if (!updateGallery) {
      return res.status(401).json({message:'Details not found'});
    }
    return res.status(201).json({message:'Data updated Sucessfully'});
  } catch (err) {
    return res.status(401).json({message:'Data updating Failed'});
  }
};

export const deleteData = async (req, res) => {
  try {
    let id = req.params.id;

    let deleteData = await GalleryDetails.findByIdAndDelete(id);

    if (!deleteData) {
      return res.status(401).json({message:'Details not found'});
    }

    return res.status(201).json({message:'Data deleted Sucessfully'});
  } catch (error) {
    return res.status(401).json({message:'Data deleting Failed'});
  }
};

export default router;
