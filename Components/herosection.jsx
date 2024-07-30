import React from "react";
import FeatureCard from "./Feature_card";
import Navbar from "../Components/NavBar";
export default function Herosection() {
  return (
    <>
      <img
        className="hero-photo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e555a538696835.576b518320564.jpg"
        alt=""
      />

      <FeatureCard />
    </>
  );
}
