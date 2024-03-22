import React, { useEffect } from "react";
import "./UserDetail.scss";
import axios from "axios";
const UserDetail = ({ userDetail }) => {
  useEffect(() => {
    axios
      .get(`http://localhost:3001/userDetail/${userDetail}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <div className="userDetail_container">User Detail</div>
    </>
  );
};

export default UserDetail;
