import router from "../Routes/BasicDetail.router.js";
import SocialMediaDetails from "../models/SocialMediaDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.WhatsUp) {
      return res.status(401).json({
        message: "Send all required fields : WhatsUp",
      });
    }
    let SocialMediaData = {
      user: req.user.id,
        Facebook: req.body.Facebook,
        LinkedIn: req.body.LinkedIn,
        WhatsUp: req.body.WhatsUp,
        Instagram: req.body.Instagram,
        Twiter: req.body.Twiter,
    };

    let postData = await SocialMediaDetails.create(SocialMediaData);

    return res.status(201).json({message:'Data uploaded sucessfully',postData});
  } catch (err) {
    return res.status(401).json({message:'Data uploading Failed'});
  }
};


export const getData=async (req, res) => {
    try {
      let getSocialMediaDetail = await SocialMediaDetails.find({ user: req.user.id });
  
      if(!getSocialMediaDetail){
        return res.status(401).json({message:'Details not found'});
      }
      return res.status(201).json({message:'Data fetched sucessfully',getSocialMediaDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching failed'});
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getSocialMediaDetail = await SocialMediaDetails.findById(req.user.id);

      if(!getSocialMediaDetail){
        return res.status(401).json({message:'Details not found'});
      }
      return res.status(201).json({message:'Data fetched sucessfully',getSocialMediaDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching failed'});
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateSocialMediaDetails = await SocialMediaDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateSocialMediaDetails) {
        return res.status(401).json({message:"Data not found that specific id"});
      }
      return res.status(201).json({message:'Data updated sucessfully'});
    } catch (err) {
      return res.status(401).json({message:'Data updating failed'});
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await SocialMediaDetails.findByIdAndDelete(id );
  
      if (!deleteData) {
        return res.status(401).json({message:"Data not found that specific Id"});
      }
  
      return res.status(201).json({message:'Data deleted sucessfully'});
    } catch (error) {
      return res.status(401).json({message:'Data deleting failed'});
    }
  };


  export default router;