import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function PrivateRoutes(props) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    // console.log("check user: ", user)
    // let session = sessionStorage.getItem("account");
    // if (!session) {
    //   navigate("/login");
    //   window.location.reload();
    // }
    if(user && )
  }, []);
  return (
    <div>
      <Routes>
        <Route path={props.path} element={props.component} />
      </Routes>
    </div>
  );
}

export default PrivateRoutes;
