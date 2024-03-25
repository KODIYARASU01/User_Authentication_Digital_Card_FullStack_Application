import router from "../Routes/BasicDetail.router.js";
import ContactDetails from '../Models/ContactDetail.model.js'

export const postData = async (req, res) => {
  try {
    if (!req.body.Email1 || !req.body.MobileNumber1 || !req.body.DOB) {
      return res.status(401).json({
        message: "Send all required fields : Email , MobileNumber, DOB",
      });
    }
    let ContactData = {
      user: req.user.id,
      Email1: req.body.Email1,
      AlternateEmail: req.body.AlternateEmail,
      MobileNumber1: req.body.MobileNumber1,
      AlternateMobileNumber: req.body.AlternateMobileNumber,
      DOB: req.body.DOB,
      Address: req.body.Address,
    };
    let postData = await ContactDetails.create(ContactData);
    return res.status(201).json({message:'Data upload sucessfully',postData});
  } catch (err) {
    return res.status(401).json({message:'Data upload failed' + err.message});
  }
};


export const getData=async (req, res) => {
    try {
      let getContactDetail = await ContactDetails.find({ user: req.user.id });
  
      return res
        .status(201)
        .json({message:'Data fetched Sucessfully',getContactDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching Failed'});
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getContactDetail = await ContactDetails.findById(req.user.id);
      if (!getContactDetail) {
        return res.status(401).json({message:'Details not found'});
      }
      return res
      .status(201)
      .json({message:'Data fetched Sucessfully',getContactDetail});
      
    } catch (err) {
      return res.status(401).json({message:'Data fetching Failed'});
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateDetails = await ContactDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateDetails) {
        return res.status(401).json({message:'Details not found'});
      }
      return res.status(201).json({message:'Data updated sucessfully'});
    } catch (err) {
      return res.status(401).json({message:'Data updating Failed'});
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await ContactDetails.findByIdAndDelete(id );
  
      if (!deleteData) {
        return res.status(401).json({message:'Details not found'});
      }
  
      return res.status(201).json({message:'Data deleted sucessfully'});
    } catch (error) {
      return res.status(401).json({message:'Data deleting Failed'});
    }
  };


  export default router;