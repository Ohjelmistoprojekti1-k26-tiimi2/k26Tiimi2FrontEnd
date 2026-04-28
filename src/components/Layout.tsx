import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

function Layout() {
  return (
    <div className="home-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;