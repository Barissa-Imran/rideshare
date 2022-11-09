import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import PrivateRoute from "../action/PrivateRoute";
import Home from "../pages/HomePage";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Rental from "../pages/Rental";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import ResetpasswordConfirm from "../pages/ResetpasswordConfirm";
import Activate from "../pages/Activate";
import Rideshare from "../pages/Rideshare";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/rental" element={<PrivateRoute><Rental /></PrivateRoute>} />
      <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
      <Route path="/cars" element={<PrivateRoute><CarListing /></PrivateRoute>} />
      <Route path="/cars/:slug" element={<PrivateRoute><CarDetails /></PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      {/* <Route
        path="/password/reset/confirm/:uid/:token"
        element={<ResetpasswordConfirm />}
      /> */}
      <Route path="/activate/:uid/:token" element={<PrivateRoute><Activate /></PrivateRoute>} />
      <Route path="*" element={<PrivateRoute><NotFound /></PrivateRoute>} />
      <Route path="/rideshare" element={<PrivateRoute><Rideshare /></PrivateRoute>} />
      
    </Routes>
  );
};

export default Routers;
