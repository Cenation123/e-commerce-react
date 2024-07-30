import React from "react";
import { Link } from "react-router-dom";
export default function herosectionNavbar() {
  return (
    <section className="hero-navbar">
      <img
        src="./public/31HagnoR7lL-removebg-preview.png"
        alt=""
        className="nike-lime-logo"
      />
      <Link to="/" className="hero-items">
        New & Featured
      </Link>
      <Link to="/men" className="hero-items">
        Men
      </Link>
      <Link to="/women" className="hero-items">
        Women
      </Link>
      <Link to="/Kids" className="hero-items">
        Kids
      </Link>
      <Link to="/Sale" className="hero-items">
        Sale
      </Link>
      <Link to="/Customise" className="hero-items">
        Customise
      </Link>
      <Link to="/SNKRS" className="hero-items">
        SNKRS
      </Link>
      <input type="search" name="Search" id="SearchBar" placeholder="Search" />
    </section>
  );
}
