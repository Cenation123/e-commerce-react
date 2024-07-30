import React from "react";

import HerosectionNavbar from "./herosectionNavbar";
import { Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="Navbar">
        <img
          className="nike-logo"
          src="https://www.nicekicks.com/files/2014/10/air-jordan-logo-667x500.jpg"
          alt=""
        />
        <p className="nav-items">Find a Store</p>
        <p className="nav-items">Help</p>
        <p className="nav-items">Join Us</p>
        <p className="nav-items">Sign In</p>
      </nav>
      <HerosectionNavbar />
      <Outlet/>
    </>
  );
}
