import React, { useState, useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./component/User_Auth/SignIn";
import SignUp from "./component/User_Auth/SignUp";
import UserDetail from "./component/UserDetail/UserDetail";
import AdminPannel from "./component/AdminPannel/AdminPannel";
import formContext from "./component/Context/FormContext";

// import { auth } from "./authRoutes";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // State to store user authentication
  let [UserDetails, setUserDetails] = useState([]);
  let [show, setShow] = useState(false);
  let [profile, setProfile] = useState();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [location, setLocation] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader, setLoader] = useState(false);
  const [profileView, setProfileView] = useState(false);
  console.log(profileView)
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    if (userToken) {
      setUser(userToken);
    }
  }, [navigate]); // Load user from localStorage on component mount
  return (
    <>
      <formContext.Provider
        value={{
          UserDetails,
          setUserDetails,
          user,
          setUser,
          profileView,
          setProfileView,
          show,
          setShow,
          profile,
          setProfile,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          location,
          setLocation,
          mobileNumber,
          setMobileNumber,
          email,
          setEmail,
          password,
          setPassword,
          loader,
          setLoader,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to={`/admin/${user.id}`} /> : <SignIn />
            }
          />
          <Route
            path="/register"
            element={
              user ? <Navigate to={`/admin/${user.id}`} /> : <SignUp />
            }
          />
          <Route
            path="/user-detail/:id"
            element={user ? <UserDetail /> : <Navigate to={"/"} />}
          />
          <Route path="admin/:id" element={user ? <AdminPannel /> :<Navigate to={"/"} />}/>
          //{" "}
          {/* You can use your authRoutes with useAuthRoutes hook here if needed */}
        </Routes>
      </formContext.Provider>
    </>
  );
};

export default App;
