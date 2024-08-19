import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Users.scss";

function Users(props) {
  const navigate = useNavigate();

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      navigate("/login");
    }
  }, []);

  return <div>users component</div>;
}

export default Users;
