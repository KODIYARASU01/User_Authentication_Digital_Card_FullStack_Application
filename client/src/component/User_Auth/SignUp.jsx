import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import signup from "../../assets/User_Auth/register2.svg";
import brand from "../../assets/User_Auth/brand.png";
import illustration from "../../assets/Background/register_illustrator.svg";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  let navigate = useNavigate();
  //Image store state :
  let [profile, setProfile] = useState();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [location, setLocation] = useState("");
  let [mobile, setMobile] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader1, setLoader1] = useState(false);

  return (
    <>
      <div className="signup_container">
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
        </div>
        <div className="box_container">
          <div className="right_form">
            <div className="form_title">
              <h4>Welcome to AristosTech Digital Card Creator!</h4>
              <p>Create your new Account</p>
            </div>
            <div className="illustration">
              <img src={illustration} alt="illustration" />
            </div>
            <form action="">
              {/* <div className="profile">
                <label htmlFor="profile">
                  <img
                    src={profile || avatar}
                    alt="avatar"
                    id="profile_image"
                  />
                </label>
                <input
                  // onChange={onUpload}
                  type="file"
                  id="profile"
                  name="profile"
                />
              </div> */}
              {/* //First Name */}
              <div className="form_group">
                <label htmlFor="userName">
                  FirstName{" "}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Eg: Jayakumar "
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-user"></i>
                </div>
              </div>
              {/* //Last Name */}
              <div className="form_group">
                <label htmlFor="lastName">
                  LastName{" "}
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Eg : Kumar or K"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-user"></i>
                </div>
              </div>
              {/* Email`` */}
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
              {/* Password`` */}
              <div className="form_group">
                <label htmlFor="email">
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-lock"></i>
                </div>
              </div>
              {/* //Location */}
              <div className="form_group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  placeholder="Eg : TamilNadu,Chennai"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-user"></i>
                </div>
              </div>
              {/* MobileNumber`` */}
              <div className="form_group">
                <label htmlFor="lastName">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Eg : +91 6576579679"
                  name="mobile"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-user"></i>
                </div>
              </div>

              <div className="form_submit">
                <button type="submit">
                  Register
                  {loader1 ? (
                    <span className="loader"></span>
                  ) : (
                    <div className="rocket">
                      <i className="bx bxs-rocket bx-flashing"></i>
                    </div>
                  )}
                </button>
              </div>
              <div className="or">
                <p>or Continue</p>
              </div>
            </form>

            <div className="signup_link">
              <p>
                Already have an Account ? <Link to="/">Login</Link>
              </p>
            </div>
          </div>
          <div className="right_image">
            <img className="login" src={signup} alt="signUp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
