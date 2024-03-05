import React from "react";
import "./ListCoffeeContainer.css";
import "./CoffeePriceCard.jsx";
function Listcoffeecontainer() {
  return (
    <div className="list-coffee-container">
      <div className="article-container">
        <div className="article-content">
          <h1 className="article-content__title">Our Collection</h1>
          <p className="article-content__paragraph">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="content-container-button">
            <button className="article-content__button">All Products</button>
            <button className="article-content__button">Available Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listcoffeecontainer;
