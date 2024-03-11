import React from "react";
import "./CoffeePriceCard.css";

function CoffeePriceCard({
  id,
  title,
  image,
  price,
  delimited,
  popular,
  rating,
  votes,
}) {
  return (
    <div className="container-img" key={id}>
      {popular && (
        <div className="container-popular">
          <p>popular</p>
        </div>
      )}

      <img
        className="imagen"
        alt="Coffe"
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
          {rating} <span>({votes} votes)</span>
        </p>
        {delimited && <p className="sold-out">sold out</p>}
      </div>
    </div>
  );
}

export default CoffeePriceCard;
