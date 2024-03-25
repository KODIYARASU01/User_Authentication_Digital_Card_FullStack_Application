import React, { useEffect, useRef, useState, useContext } from "react";
import "./Form.scss";
import user from "../../assets/Social Medias/user1.gif";
import background from "../../assets/banner.jpg";
import upload from "../../assets/Social Medias/addImage.gif";
import f from "../../assets/Social Medias/f.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import insta from "../../assets/Social Medias/insta.gif";
import clientProfile from "../../assets/avatar_2.png";

import formContext from "../Context/FormContext.jsx";
import {
  convertToBase64Basic,
  convertTestimonialImageToBase64,
  convertServiceImageToBase64,
  convertProductImageToBase64,
  convertGalleryImageToBase64,
  convertBannerImageToBase64,
  convertQRCodeImageToBase64,
} from "../Helper/Convert.js";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let Forms = () => {
  let [loader3, setLoader3] = useState(false);
  let {
    Data,
    setData,
    BasicID,
    setBasicID,
    QRCodeId,
    setQRCodeId,
    ProductId,
    setProdictId,
    GallId,
    setGallId,
    TestimonialID,
    setTestimonialID,
    show,
    setShow,
    slideClose,
    setSlideShow,
    basicForm,
    setBasicForm,
    contactForm,
    setContactForm,
    serviceForm,
    setServiceForm,
    productForm,
    setProductForm,
    galleryForm,
    setGalleryForm,
    socialMediaForm,
    setSocialMediaForm,
    testimonialForm,
    setTestimonialForm,
    QRCodeForm,
    setQRCodeForm,
    banner,
    setBanner,
    logo,
    setLogo,
    fullName,
    setFullName,
    profession,
    setProfession,
    summary,
    setSummary,
    Email1,
    setEmail1,
    AlternateEmail,
    setAlternateEmail,
    MobileNumber1,
    setMobileNumber1,
    AlternateMobileNumber,
    setAlternateMobileNumber,
    DOB,
    setDOB,
    Address,
    setAddress,
    serviceImage,
    setServiceImage,
    serviceTitle,
    setServiceTitle,
    serviceSummary,
    setServiceSummary,
    productImage,
    setProductImage,
    productTitle,
    setProductTitle,
    productReleaseDate,
    setProductReleaseDate,
    productSummary,
    setProductSummary,
    galleryImage,
    setGalleryImage,
    videoURL,
    setVideoURL,
    Facebook,
    setFacebook,
    LinkedIn,
    setLinkedIn,
    WhatsUp,
    setWhatsUp,
    Instagram,
    setInstagram,
    Twiter,
    setTwiter,
    clientImage,
    setClientImage,
    clientName,
    setClientName,
    clientFeedbackDate,
    setClientFeedbackDate,
    clientFeedback,
    setClientFeedback,
    QRCodeImage,
    setQRCodeImage,
    ID,
    setID,
    BasicData,
    setBasicData,
    ContactData,
    setContactData,
    ServiceData,
    setServiceData,
    ProductData,
    setProductData,
    GalleryData,
    setGalleryData,
    SocialMediaData,
    setSocialMediaData,
    TestimonialData,
    setTestimonialData,
    QRCodeData,
    setQRCodeData,
    BasicEdit,
    setBasicEdit,
    ContactEdit,
    setContactEdit,
    ServiceEdit,
    setServiceEdit,
    ProductEdit,
    setProductEdit,
    GalleryEdit,
    setGalleryEdit,
    SocialMediaEdit,
    setSocialMediaEdit,
    TestimonialEdit,
    setTestimonialEdit,
    QRCodeEdit,
    setQRCodeEdit,
  } = useContext(formContext);
  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64Basic(e.target.files[0]);

    setLogo(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadBannerImage = async (e) => {
    let base64 = await convertBannerImageToBase64(e.target.files[0]);

    setBanner(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadServiceImage = async (e) => {
    let base64 = await convertServiceImageToBase64(e.target.files[0]);
    setServiceImage(base64);
  };
  // //Formik does not support file upload so we could create handler :
  const onUploadProductImage = async (e) => {
    let base64 = await convertProductImageToBase64(e.target.files[0]);

    setProductImage(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadTestimonialImage = async (e) => {
    let base64 = await convertTestimonialImageToBase64(e.target.files[0]);
    setClientImage(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadGalleryImage = async (e) => {
    let base64 = await convertGalleryImageToBase64(e.target.files[0]);
    setGalleryImage(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadQRCodeImage = async (e) => {
    let base64 = await convertQRCodeImageToBase64(e.target.files[0]);
    setQRCodeImage(base64);
  };
  //Home post form submit:

  async function handleBasicFormSubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));

      let data = {
        logo,
        banner,
        fullName,
        profession,
        summary,
      };
      setLoader3(true);
      // Make authenticated request with bearer token
      await axios
        .post("https://user-authentication-fullstack-application.onrender.com/basic_detail", data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((responce) => {
          toast.success(responce.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setFullName("");
          setProfession("");
          setSummary("");
          setBanner(undefined);
          setLogo(undefined);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            // transition: Bounce,
          });
          setLoader3(false);
        });

      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.responce.data.message, {
        position: "top-center",
        autoClose: 2000,
        // transition: Bounce,
      });
      setLoader3(false);
    }
  }
  //Home form Edit:
  async function handleBasicFormEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));

      let data = {
        banner,
        logo,
        fullName,
        profession,
        summary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://user-authentication-fullstack-application.onrender.com/basic_detail/specific/${BasicID}`, data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setLogo(undefined);
          setFullName("");
          setProfession("");
          setSummary("");
          setBanner(undefined);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setFullName("");
      setProfession("");
      setSummary("");
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //SocialMedia form submit:
  async function handleSocialMediaFormSubmit(e) {
    e.preventDefault();

    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let SocialMediadata = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
      };

      // Make authenticated request with bearer token
      await axios
        .post("https://user-authentication-fullstack-application.onrender.com/socialMedia_detail", SocialMediadata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          setLoader3(false);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setFacebook("");
          setLinkedIn("");
          setWhatsUp("");
          setInstagram("");
          setTwiter("");
        })
        .catch((error) => {
          console.log(error.message);
          setLoader3(false);
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //SocialMedia form Edit:
  async function handleSocialMediaFormEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let data = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `https://user-authentication-fullstack-application.onrender.com/socialMedia_detail/${SocialMediaData._id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${id.token}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setFacebook("");
          setLinkedIn("");
          setWhatsUp("");
          setInstagram("");
          setTwiter("");
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Contact form submit:
  async function handleContactFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let Contactdata = {
        Email1,
        AlternateEmail,
        MobileNumber1,
        AlternateMobileNumber,
        DOB,
        Address,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://user-authentication-fullstack-application.onrender.com/contact_detail", Contactdata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setMobileNumber1("");
          setAlternateMobileNumber("");
          setEmail1("");
          setAlternateEmail("");
          setDOB("");
          setAddress("");
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
    } catch (error) {
      // Handle errors
      alert("Something Error" + error.message);
      setLoader3(false);
    }
  }
  //Contact form Edit:
  async function handleContactFormEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let data = {
        Email1,
        AlternateEmail,
        MobileNumber1,
        AlternateMobileNumber,
        DOB,
        Address,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://user-authentication-fullstack-application.onrender.com/contact_detail/${ContactData._id}`, data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setMobileNumber1("");
          setAlternateMobileNumber("");
          setEmail1("");
          setAlternateEmail("");
          setDOB("");
          setAddress("");
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Service form submit:
  async function handleServiceFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));

      let data = {
        serviceImage,
        serviceTitle,
        serviceSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://user-authentication-fullstack-application.onrender.com/service_detail", data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setServiceSummary("");
          setServiceTitle("");
          setServiceImage();
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.responce.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Service form Edit:
  async function handleServiceFormEdit(e) {
    e.preventDefault();

    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let data = {
        serviceImage,
        serviceTitle,
        serviceSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://user-authentication-fullstack-application.onrender.com/service_detail/specific/${Data}`, data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setServiceSummary("");
          setServiceTitle("");
          setServiceImage("");
          setServiceEdit(false);
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setServiceEdit(false);
        });

      setLoader3(false);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Product form submit:
  async function handleProductFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let Productdata = {
        productImage,
        productTitle,
        productReleaseDate,
        productSummary,
      };
      // const formData2 = new FormData();
      // formData2.append("productImage", productImage);
      // formData2.append("productTitle", productTitle);
      // formData2.append("productReleaseDate", productReleaseDate);
      // formData2.append("productSummary", productSummary);
      // Make authenticated request with bearer token
      await axios
        .post("https://user-authentication-fullstack-application.onrender.com/product_detail", Productdata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setProductTitle("");
          setProductImage(undefined);
          setProductSummary("");
          setProductReleaseDate("");
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
    } catch (error) {
      // Handle errors
      toast.error(error.response, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Product form Edit:
  async function handleProductEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let data = {
        productImage,
        productTitle,
        productReleaseDate,
        productSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `https://user-authentication-fullstack-application.onrender.com/product_detail/specific/${ProductId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${id.token}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);

          setProductTitle("");
          setProductImage("");
          setProductSummary("");
          setProductReleaseDate("");
          setProductEdit(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setProductEdit(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });

      setLoader3(false);
    }
  }
  //Gallery form submit:
  async function handleGalleryFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let Gallerydata = {
        galleryImage,
        videoURL,
      };

      // Make authenticated request with bearer token
      await axios
        .post("https://user-authentication-fullstack-application.onrender.com/gallery_detail", Gallerydata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setGalleryImage("");
          setVideoURL("");
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.respose.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });

      setLoader3(false);
    }
  }
  //Gallery form Edit:
  async function handleGalleryEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let data = {
        galleryImage,
        videoURL,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://user-authentication-fullstack-application.onrender.com/gallery_detail/specific/${GallId}`, data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setGalleryImage(undefined);
          setVideoURL('')
          setGalleryEdit(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setGalleryEdit(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }

  //Testimonial form submit:
  async function handleTestimonialFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let SocialMediadata = {
        clientName,
        clientImage,
        clientFeedbackDate,
        clientFeedback,
      };
      // Make authenticated request with bearer token
      await axios
        .post(`https://user-authentication-fullstack-application.onrender.com/testimonial_detail`, SocialMediadata, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setClientImage(undefined);
          setClientName("");
          setClientFeedbackDate("");
          setClientFeedback("");
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }
  //Testimonial form Edit:
  async function handleTestimonialEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let data = {
        clientImage,
        clientName,
        clientFeedbackDate,
        clientFeedback,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `https://user-authentication-fullstack-application.onrender.com/testimonial_detail/specific/${TestimonialID}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${id.token}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setClientImage(undefined);
          setClientName("");
          setClientFeedbackDate("");
          setClientFeedback("");
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });

      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }

  //QRCODE submit:

  async function handleQRCodeFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));

      let data = {
        QRCodeImage,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://user-authentication-fullstack-application.onrender.com/qrcode_detail", data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setQRCodeImage(undefined);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.respose.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });

      setLoader3(false);
    }
  }
  //QRCODE form Edit:
  async function handleQRCodeEdit(e) {
    e.preventDefault();
    try {
      setLoader3(true);
      // Retrieve token from local storage or wherever it's stored
      let id = JSON.parse(localStorage.getItem("token"));
      let data = {
        QRCodeImage,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://user-authentication-fullstack-application.onrender.com/qrcode_detail/specific/${QRCodeId}`, data, {
          headers: {
            Authorization: `Bearer ${id.token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });

          setLoader3(false);
          setGalleryEdit(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Flip,
          });
          setLoader3(false);
          setGalleryEdit(false);
        });
      setLoader3(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Flip,
      });
      setLoader3(false);
    }
  }

  return (
    <>
      <div
        className="forms_container"
        id={slideClose ? "Formclose" : "Formopen"}
      >
        {/* <ToastContainer
          closeOnClick
          autoClose={2000}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        {/* //Form 1 Basic Details */}
        {basicForm === true ? (
          <div
            className="Form1_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Basic Detail Session</h4>
              <img src={user} alt="user" />
            </div>
            <form
              action=""
              onSubmit={handleBasicFormSubmit}
              encType="multipart/form-data"
            >
              {/* //Banner */}
              <div className="form_group">
                <label htmlFor="banner">
                  Upload Banner Image
                  <img
                    className="banner"
                    src={banner !== undefined ? banner : background}
                    alt=""
                    name="banner"
                  />
                </label>

                <input
                  type="file"
                  name="banner"
                  id="banner"
                  onChange={onUploadBannerImage}
                />
              </div>
              {/* Logo */}
              <div className="form_group">
                <label htmlFor="logo">
                  Upload Logo Image
                  <img
                    src={logo !== undefined ? logo : clientProfile}
                    alt=""
                    name="logo"
                    className="logo"
                  />
                  {/* <img
                    src={upload}
                    alt="upload"
                    className="upload_logo"
                    name="logo"
                  /> */}
                </label>

                <input onChange={onUpload} type="file" name="logo" id="logo" />
              </div>
              {/* Author */}
              <div className="form_group">
                <label htmlFor="name">Enter FullName</label>
                <input
                  type="text"
                  placeholder="Eg : John S"
                  name="name"
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {/* Profession  */}
              <div className="form_group">
                <label htmlFor="name">Enter Your Profession</label>
                <input
                  type="text"
                  placeholder="Eg : Web Developer"
                  name="profession"
                  id="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="summary">Summary</label>
                <textarea
                  name="summary"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Write something about your profession"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                ></textarea>
              </div>

              {BasicEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleBasicFormEdit}>
                    Update{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">
                    Submit {loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}

        {/* //Form 2 contact Details */}
        {contactForm === true ? (
          <div
            className="Form2_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Contact Detail's Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleContactFormSubmit}>
              {/* Email */}
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Eg : abc@gmail.com"
                  name="email"
                  id="email"
                  value={Email1}
                  onChange={(e) => setEmail1(e.target.value)}
                />
              </div>
              {/* Alternate Email */}
              <div className="form_group">
                <label htmlFor="AlternateEmail">Alternate Email</label>
                <input
                  type="email"
                  placeholder="Eg : abc@gmail.com"
                  name="AlternateEmail"
                  id="AlternateEmail"
                  value={AlternateEmail}
                  onChange={(e) => setAlternateEmail(e.target.value)}
                />
              </div>
              {/* Mobile Number  */}
              <div className="form_group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Eg : +91 6547987845"
                  name="mobile"
                  id="mobile"
                  value={MobileNumber1}
                  onChange={(e) => setMobileNumber1(e.target.value)}
                />
              </div>
              {/* Mobile Number  */}
              <div className="form_group">
                <label htmlFor="AlternateMobile">Alternate Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Eg : +91 6547987845"
                  name="AlternateMobile"
                  id="AlternateMobile"
                  value={AlternateMobileNumber}
                  onChange={(e) => setAlternateMobileNumber(e.target.value)}
                />
              </div>
              {/* Date of Birth  */}
              <div className="form_group">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="date"
                  placeholder="Eg : 26/01/2000"
                  name="dob"
                  id="dob"
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Write your location Address"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              {ContactEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleContactFormEdit}>
                    Update{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">
                    Upload{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 3 service Details */}
        {serviceForm === true ? (
          <div
            className="Form3_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Our Service Detail Session</h4>
              <img src={user} alt="user" />
            </div>

            <form
              action=""
              onSubmit={handleServiceFormSubmit}
              encType="multipart/form-data"
            >
              {/* //service image */}
              <div className="form_group">
                <label htmlFor="serviceImage">
                  Upload Service Image
                  <img
                    className="serviceImage"
                    src={serviceImage !== undefined ? serviceImage : background}
                    alt="serviceImage"
                    name="serviceImage"
                  />
                  <img
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="banner"
                  />
                </label>

                <input
                  onChange={onUploadServiceImage}
                  type="file"
                  name="serviceImage"
                  id="serviceImage"
                />
              </div>

              {/* serviice Title */}
              <div className="form_group">
                <label htmlFor="serviceTitle">Service Title</label>
                <input
                  type="text"
                  placeholder="Eg : Web Development"
                  name="serviceTitle"
                  id="serviceTitle"
                  value={serviceTitle}
                  onChange={(e) => setServiceTitle(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="serviceSummary">Service Summary</label>
                <textarea
                  name="serviceSummary"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Write something about this service"
                  value={serviceSummary}
                  onChange={(e) => setServiceSummary(e.target.value)}
                ></textarea>
              </div>

              {ServiceEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleServiceFormEdit}>
                    Update{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">
                    Submit{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 4 product Details */}
        {productForm === true ? (
          <div
            className="Form4_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Our Product Detail Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleProductFormSubmit}>
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="productImage">
                  Upload Product Image
                  <img
                    className="productImage"
                    src={productImage !== undefined ? productImage : background}
                    alt=""
                    name="productImage"
                  />
                  <img
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="productImage"
                  />
                </label>

                <input
                  onChange={onUploadProductImage}
                  type="file"
                  name="productImage"
                  id="productImage"
                />
              </div>

              {/* product Title */}
              <div className="form_group">
                <label htmlFor="productTitle">Product Title</label>
                <input
                  type="text"
                  placeholder="Eg : Ecommerse Portal"
                  name="productTitle"
                  id="productTitle"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                />
                {/* Release data */}

                <label htmlFor="releaseDate">Relesed Date</label>
                <input
                  type="date"
                  name="releaseDate"
                  id="releaseDate"
                  value={productReleaseDate}
                  onChange={(e) => setProductReleaseDate(e.target.value)}
                />
              </div>

              <div className="form_group">
                <label htmlFor="productSummary">Product UseCase Summary</label>
                <textarea
                  name="productSummary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Write something about this Product"
                  value={productSummary}
                  onChange={(e) => setProductSummary(e.target.value)}
                ></textarea>
              </div>

              {ProductEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleProductEdit}>
                    Update{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">
                    Upload{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form5 Gallery upload */}
        {galleryForm === true ? (
          <div
            className="Form5_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Gallery Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleGalleryFormSubmit}>
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="galleryImage">
                  Upload Gallery Image
                  <img
                    className="galleryImage"
                    src={galleryImage !== undefined ? galleryImage : background}
                    alt=""
                    name="galleryImage"
                  />
                  <img
                    src={upload}
                    alt="galleryImage"
                    className="upload"
                    name="galleryImage"
                  />
                </label>

                <input
                  type="file"
                  onChange={onUploadGalleryImage}
                  name="galleryImage"
                  id="galleryImage"
                />
              </div>
              {/* Vieo upload link */}
              <div className="form_group">
                <label htmlFor="videoLink">Paste video Embeded Link</label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="videoLink"
                  id="videoLink"
                  value={videoURL}
                  onChange={(e) => setVideoURL(e.target.value)}
                />
              </div>

              {GalleryEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleGalleryEdit}>Update{loader3 ? <span className="loader3"></span> : ""}</button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">Upload{loader3 ? <span className="loader3"></span> : ""}</button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}

        {/* //Form7 social media link upload */}
        {socialMediaForm === true ? (
          <div
            className="Form7_container"
            // id={slideClose ? "Form7close" : "Form7open"}
          >
            <div className="Form_title">
              <h4>Social Media Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleSocialMediaFormSubmit}>
              {/* Vieo upload link */}
              <div className="form_group">
                <label htmlFor="facebook">
                  <img src={f} alt="facebook" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="facebook"
                  id="facebook"
                  value={Facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="linkedin">
                  <img src={linkedin} alt="LinkedIn" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="linkedin"
                  id="linkedin"
                  value={LinkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="whatsup">
                  <img src={whatsup} alt="WhatsUp" />
                </label>
                <input
                  type="tel"
                  placeholder="Eg : +91 2456456446"
                  name="whatsup"
                  id="whatsup"
                  value={WhatsUp}
                  onChange={(e) => setWhatsUp(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="insta">
                  <img src={insta} alt="Insta" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="insta"
                  id="insta"
                  value={Instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="twiter">
                  <img src={twiter} alt="Twiter" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="twiter"
                  id="twiter"
                  value={Twiter}
                  onChange={(e) => setTwiter(e.target.value)}
                />
              </div>
              {SocialMediaEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleSocialMediaFormEdit}>
                    Update{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">
                    Upload{loader3 ? <span className="loader3"></span> : ""}
                  </button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 8 Testimonial Details */}
        {testimonialForm === true ? (
          <div
            className="Form8_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Testimonial Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleTestimonialFormSubmit}>
              {/* //service image */}
              <div className="form_group">
                <label htmlFor="testimonialImage">
                  Upload Client Profile Image
                  <img
                    onChange={onUploadTestimonialImage}
                    className="testimonialImage"
                    src={
                      clientImage !== undefined ? clientImage : clientProfile
                    }
                    alt=""
                    name="testimonialImage"
                  />
                  <img
                    onChange={onUploadTestimonialImage}
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="banner"
                  />
                </label>

                <input
                  onChange={onUploadTestimonialImage}
                  type="file"
                  name="testimonialImage"
                  id="testimonialImage"
                />
              </div>

              {/* serviice Title */}
              <div className="form_group">
                <label htmlFor="clientName">Client FullName</label>
                <input
                  type="text"
                  placeholder="Eg : John K"
                  name="clientName"
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <label htmlFor="feedbackDate">Feedback Date</label>
                <input
                  type="date"
                  // placeholder="Eg : John K"
                  name="feedbackDate"
                  id="feedbackDate"
                  value={clientFeedbackDate}
                  onChange={(e) => setClientFeedbackDate(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="clientSummary">Client Feed Back</label>
                <textarea
                  name="clientSummary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Paste out client feedback details"
                  value={clientFeedback}
                  onChange={(e) => setClientFeedback(e.target.value)}
                ></textarea>
              </div>

              {TestimonialEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleTestimonialEdit}>Update{loader3 ? <span className="loader3"></span> : ""}</button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">Upload{loader3 ? <span className="loader3"></span> : ""}</button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}

        {/* //QRCode Image upload */}
        {QRCodeForm === true ? (
          <div
            className="Form9_container"
            // id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>QRCode Image Upload</h4>
              <img src={user} alt="user" />
            </div>

            <form action="" onSubmit={handleQRCodeFormSubmit}>
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="QRCodeImage">
                  Upload QRCode Image
                  <img
                    className="QRCodeImage"
                    src={QRCodeImage !== undefined ? QRCodeImage : background}
                    alt="QRCodeImage"
                    name="QRCodeImage"
                  />
                </label>
                <input
                  type="file"
                  onChange={onUploadQRCodeImage}
                  name="QRCodeImage"
                  id="QRCodeImage"
                />
              </div>
              {QRCodeEdit === true ? (
                <div className="form_submit">
                  <button onClick={handleQRCodeEdit}>Update{loader3 ? <span className="loader3"></span> : ""}</button>
                </div>
              ) : (
                <div className="form_submit">
                  <button type="submit">Upload{loader3 ? <span className="loader3"></span> : ""}</button>
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Forms;
