import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PrivateRoutes(props) {
  const navigate = useNavigate();
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      navigate("/login");
    }
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
