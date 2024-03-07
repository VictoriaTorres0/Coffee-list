import React, { useEffect, useState } from "react";
import "./ListCoffeeContainer.css";
import "./CoffeePriceCard.jsx";
import CoffeePriceCard from "./CoffeePriceCard.jsx";
function Listcoffeecontainer() {
  const [coffees, setCoffees] = React.useState([]);

  const ObtenerCoffees = async () => {
    const respuesta = await fetch("https://api.sampleapis.com/coffee/hot");
    const resultado = await respuesta.json();
    setCoffees(resultado);
  };

  useEffect(() => {
    ObtenerCoffees();
  }, []);
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
      <div className="Card-container">
        {coffees.map((coffee) => (
          <CoffeePriceCard
            title={coffee.title}
            image={coffee.image}
            id={coffee.id}
            // price={coffee.price}
            price={5.0}
            delimited={"sold out"}
          />
        ))}
      </div>
    </div>
  );
}

export default Listcoffeecontainer;
