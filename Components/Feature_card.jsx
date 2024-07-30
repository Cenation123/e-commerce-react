import React from "react";
import featureData from "../featureData";
export default function FeatureCard() {
  const data = featureData.map((item) => {
    return (
      <div className="card text-bg-dark">
        <img className="feature-image" src={`${item.img}`} alt="" />
        <div className="feature-card-img-overlay">
          <h5 className="feature-card-title">{item.card_title}</h5>
          <p className="feature-card-text">{item.card_text}</p>
          <button className="feature-btn">Buy now</button>
        </div>
      </div>
    );
  });

  return <div className="flex">{data}</div>;
}
