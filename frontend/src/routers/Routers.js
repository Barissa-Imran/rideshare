import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rental" element={<Rental/>} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/password/reset/confirm/:uid/:token" element={<ResetpasswordConfirm/>} />
      <Route path="/activate/:uid/:token" element={<Activate/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
