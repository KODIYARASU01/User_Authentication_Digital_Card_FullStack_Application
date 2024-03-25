import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
//Import userAuth Routes:
import UserAuthRoute from "./Routes/UserAuth.route.js";
import UserDataRoute from './Routes/UserData.route.js';
import BasicDetailRoute from './Routes/BasicDetail.router.js';
import ContactDetailRoute from './Routes/ContactDetail.route.js';
import ServiceDetailRoute from './Routes/ServiceDetails.route.js';
import ProductDetailRoute from './Routes/ProductDetail.route.js';
import GalleryDetailRoute from './Routes/GalleryDetail.route.js';
import SocialMediaDetailRoute from './Routes/SocialMedia.route.js'
import TestimonialDetailRoute from './Routes/TestimonialDetail.route.js';
import QRCodeDetailRoute from './Routes/QRCodeDetail.route.js'
dotenv.config();
let app = express();

//.env import:

let PORT = process.env.PORT || 3000;
let uri = process.env.MONGODB_URI;

//Middleware:
app.use(cors());
app.use(express.json({limit: '30mb'}));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


//All Routes:

app.use("/auth", UserAuthRoute);
app.use('/userData',UserDataRoute);
app.use('/basic_detail',BasicDetailRoute);
app.use('/contact_detail',ContactDetailRoute);
app.use('/service_detail',ServiceDetailRoute);
app.use('/product_detail',ProductDetailRoute);
app.use('/gallery_detail',GalleryDetailRoute);
app.use('/socialMedia_detail',SocialMediaDetailRoute);
app.use('/testimonial_detail',TestimonialDetailRoute);
app.use('/qrcode_detail',QRCodeDetailRoute)

app.get("/", (req, res) => {
  res.send("Server is running");
});

//Connection Mongodb :

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDb Connceted Sucessfully");
    try {
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (err) {
      console.log(err.message);
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
