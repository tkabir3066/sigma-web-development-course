import React from "react";
import "./Card.css";
import img from "./images/1.webp";
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <img src={img} alt="" width={233} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
