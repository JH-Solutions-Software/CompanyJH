import React from "react";
import "../assets/styles/Card.css";

function Card({ title, description, Icon }) {
  return (
    <div className="card">
      <div className="card-icon">
        <Icon className="icon" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;