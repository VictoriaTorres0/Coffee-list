import React from "react";
import "./CoffeePriceCard.css";
function CoffeePriceCard({ id, title, image, price, delimited }) {
  return (
    <div key={id}>
      <img
        src={image}
        width={300}
        height={260}
        style={{ borderRadius: "20px", objectFit: "cover" }}
      />

      <div className="coffee-type--price">
        <h3 className="coffee-type">{title}</h3>
        <p className="coffee-price">${price}</p>
      </div>
      <div className="container-types__coffees">
        <p className="coffe-votes">
          4.85 <span>(14 votes)</span>
          <p className="sold-out">{delimited}</p>
        </p>
      </div>
    </div>
  );
}

export default CoffeePriceCard;
