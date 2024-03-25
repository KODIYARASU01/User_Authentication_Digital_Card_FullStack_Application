import router from "../Routes/BasicDetail.router.js";
import ProductDetails from "../models/ProductDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (
      !req.body.productTitle ||
      !req.body.productSummary ||
      !req.body.productReleaseDate
    ) {
      return res.status(401).json({
        message:
          "Send all required fields :productTitle, productSummary,productReleaseDate",
      });
    }
    let newData = new ProductDetails({
      user: req.user.id,
      productImage: req.body.productImage,

      productTitle: req.body.productTitle,
      productSummary: req.body.productSummary,
      productReleaseDate: req.body.productReleaseDate,
    });

    let result = await newData.save();

    return res
      .status(201)
      .json({ message: "Data uploaded sucessfully", result });
  } catch (err) {
    return res.status(401).json({ message: "Data uploading Failed" });
  }
};

export const getData = async (req, res) => {
  try {
    let getProductDetail = await ProductDetails.find({ user: req.user.id });
    if (!getProductDetail) {
      return res.status(401).json({ message: "Details not found" });
    }
    return res
      .status(201)
      .json({ message: "Data fetched Sucessfully", getProductDetail });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};

export const getSpecificData = async (req, res) => {
  try {
    // let { id } = req.params;
    let getProductDetail = await ProductDetails.findById(req.user.id);

    if (!getProductDetail) {
      return res.status(401).json({ message: "Details not found" });
    }

    return res
      .status(201)
      .json({ message: "Data fetched Sucessfully", getProductDetail });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};

export const getSpecificIdData = async (req, res) => {
  try {
    let { id } = req.params;
    let getProductDetail = await ProductDetails.findById(id);

    if (!getProductDetail) {
      return res.status(401).json({ message: "Details not found" });
    }

    return res
      .status(201)
      .json({ message: "Data fetched Sucessfully", getProductDetail });
  } catch (err) {
    return res.status(401).json({ message: "Data fetching Failed" });
  }
};

export const updateData = async (req, res) => {
  try {
    let { id } = req.params;

    let updateProduct = await ProductDetails.findByIdAndUpdate(id, req.body);

    if (!updateProduct) {
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

    let deleteData = await ProductDetails.findByIdAndDelete(id);

    if (!deleteData) {
      return res.status(401).json({ message: "Details not found" });
    }

    return res.status(201).json({ message: "Data deleted sucessfully" });
  } catch (error) {
    return res.status(401).json({ message: "Data deleting Failed" });
  }
};

export default router;
