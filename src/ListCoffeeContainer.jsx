import React from "react";
import "./ListCoffeeContainer.css";
import Parrafos from "./Parrafos.jsx";
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
        </div>
      </div>
    </div>
  );
}

export default Listcoffeecontainer;
