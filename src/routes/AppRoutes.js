import React from 'react';
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Users from "../components/ManageUsers/Users";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';

function AppRoutes(props) {
    return (
        <div>
            <Routes>
            <Route path="/" element={"home"} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="*" element={"404 not found"} /> */}
          </Routes>
          <PrivateRoutes path="/users" component={<Users />}/>
        </div>
    );
}

export default AppRoutes;