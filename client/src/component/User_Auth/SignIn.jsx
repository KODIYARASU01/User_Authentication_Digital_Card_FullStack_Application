import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.scss";
import image from "../../assets/User_Auth/login1.svg";
import brand from "../../assets/User_Auth/brand.png";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setpassword] = useState("");
  let [loader, setLoader] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    setLoader(true);
    await axios
      .post("http://localhost:3001/auth/login", data)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setLoader(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setLoader(false);
      });
  }
  return (
    <>
      <div className="signin_container">
        <ToastContainer
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="brand_logo">
          <img src={brand} alt="brand" />

          <p>Virtual Card Creations</p>

          {/* <i
            className="bx bxl-sketch bx-flip-horizontal bx-fade-up"
            style={{ color: "#58dec9" }}
          ></i> */}
          <i className='bx bxl-sketch bx-burst bx-flip-horizontal' style={{ color: "#58dec9" }}></i>
        </div>
        <div className="box_container">
          <div className="left_image">
            <img src={image} alt="signup" />
          </div>
          <div className="right_form">
            <div className="form_title">
              <h4>Welcome Back!</h4>
              <p>Please enter login details below</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="email">
                  Email{" "}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Eg : abc@gmail.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-envelope"></i>
                </div>
              </div>
              <div className="form_group">
                <label htmlFor="password">
                  Password{" "}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-lock-open"></i>
                </div>
              </div>
              <div className="forgot_password">
                <Link>
                  <p>Forget Password ?</p>
                </Link>
              </div>
              <div className="form_submit">
                <button type="submit">
                  Sign In{" "}
                  {loader ? (
                    <span className="loader"></span>
                  ) : (
                    <div className="rocket">
                      <i className="bx bx-log-in bx-flashing"></i>
                    </div>
                  )}
                </button>
              </div>
              <div className="or">
                <p>or &nbsp;&nbsp;&nbsp; Continue</p>
              </div>
            </form>

            <div className="signup_link">
              <p>
                Don't have an account ? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
