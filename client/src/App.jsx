import React, { useState, useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./component/User_Auth/SignIn";
import SignUp from "./component/User_Auth/SignUp";
import UserDetail from "./component/UserDetail/UserDetail";
// import { auth } from "./authRoutes";

const App = () => {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    setuser(token);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/user-detail/:id" /> : <SignIn />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/user-detail/:id" /> : <SignUp />}
        />
        <Route path="/user-detail/:id" element={<UserDetail />} />
        {/* {auth.map((e, i) => (
          <Route key={i} path={e.path} element={e.element} />
        ))} */}
      </Routes>
    </>
  );
};

export default App;
