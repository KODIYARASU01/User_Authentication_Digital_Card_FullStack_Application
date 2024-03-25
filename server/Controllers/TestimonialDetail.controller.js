import router from "../Routes/BasicDetail.router.js";
import TestimonialDetails from '../Models/Testimonial.model.js'
export const postData = async (req, res) => {
  try {
    if (!req.body.clientImage || !req.body.clientName || !req.body.clientFeedback || !req.body.clientFeedbackDate) {
      return res.status(401).json({
        message: "Send all required fields : productImage , productTitle, productSummary,productReleaseDate",
      });
    }
    let TestimonialData = {
      user: req.user.id,
        clientImage: req.body.clientImage,
        clientName: req.body.clientName,
        clientFeedback: req.body.clientFeedback,
        clientFeedbackDate:req.body.clientFeedbackDate
    };

    let postData = await TestimonialDetails.create(TestimonialData);

    return res.status(201).json({message:'Data uploaded sucessfully'});
  } catch (err) {
    return res.status(401).json({message:'Data uploading failed' + err.message});
  }
};


export const getData=async (req, res) => {
    try {
      let getTestimonialDetail = await TestimonialDetails.find({ user: req.user.id });
      if(!getTestimonialDetail){
        return res.status(401).json({message:'Details not found'});
      }
  
      return res.status(201).json({message:'Data fetched sucessfully',getTestimonialDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching failed'});
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getTestimonialDetail = await TestimonialDetails.findById(req.user.id);
      if(!getTestimonialDetail){
        return res.status(401).json({message:'Details not found'});
      }
      return res.status(201).json({message:'Data fetched sucessfully',getTestimonialDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching failed'});
    }
  };

  export const getSpecificIdData=async (req, res) => {
    try {
      let { id } = req.params;
      let getTestimonialDetail = await TestimonialDetails.findById(id);
      if(!getTestimonialDetail){
        return res.status(401).json({message:'Details not found'});
      }
      return res.status(201).json({message:'Data fetched sucessfully',getTestimonialDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching failed'});
    }
  };

  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateTestimonial = await TestimonialDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateTestimonial) {
        return res.status(401).json({message:"Data not found that specific id"});
      }
      return res.status(201).json({message:"Data Updated Sucessfully"});
    } catch (err) {
      return res.status(401).json({message:'Data updating failed'});
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await TestimonialDetails.findByIdAndDelete(id );
  
      if (!deleteData) {
        return res.status(401).json({message:"Data not found that specific Id"});
      }
  
      return res.status(201).json({message:'Data deleted sucessfully'});
    } catch (error) {
      return res.status(401).json({message:'Data deleting failed'});
    }
  };


  export default router;