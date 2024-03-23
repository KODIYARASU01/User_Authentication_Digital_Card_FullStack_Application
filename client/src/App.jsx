import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./component/User_Auth/SignIn";
import SignUp from "./component/User_Auth/SignUp";
import UserDetail from "./component/UserDetail/UserDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn  />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/user-detail/:id" element={<UserDetail  />} />
      </Routes>
    </>
  );
};

export default App;
