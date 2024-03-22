import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
//Import userAuth Routes:
import UserAuthRoute from "./Routes/UserAuth.route.js";
dotenv.config();
let app = express();

//.env import:

let PORT = process.env.PORT || 3000;
let uri = process.env.MONGODB_URI;

//Middleware:
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//All Routes:
app.use("/auth", UserAuthRoute);

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
