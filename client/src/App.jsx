import React, { useState, useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./component/User_Auth/SignIn";
import SignUp from "./component/User_Auth/SignUp";
import UserDetail from "./component/UserDetail/UserDetail";
// import { auth } from "./authRoutes";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to store user authentication

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    if (userToken) {
      setUser(userToken);
    }
  }, [navigate]); // Load user from localStorage on component mount
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to={`/user-detail/${user.id}`} /> : <SignIn />
          }
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to={`/user-detail/${user.id}`} /> : <SignUp />
          }
        />
        <Route
          path="/user-detail/:id"
          element={
            user ? (
              <UserDetail user={user} setUser={setUser} />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        //{" "}
        {/* You can use your authRoutes with useAuthRoutes hook here if needed */}
      </Routes>
    </>
  );
};

export default App;
