import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function PrivateRoutes(props) {
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    return (
      <Routes>
        <Route path={props.path} element={props.component} />
      </Routes>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoutes;
