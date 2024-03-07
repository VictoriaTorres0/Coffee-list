import React from "react";
import "./CoffeePriceCard.css";
function CoffeePriceCard({ id, title, image }) {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <img src={image} width={200} height={200} />
    </div>
  );
}

export default CoffeePriceCard;
