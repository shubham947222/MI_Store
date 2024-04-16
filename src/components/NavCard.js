import React from "react";
import "../styles/NavCard.css";
const NavCard = ({ name, price, image, index }) => {
  return (
    <div className="NavCard">
      <img src={image} alt={`${index} card`} loading="lazy" />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default NavCard;
