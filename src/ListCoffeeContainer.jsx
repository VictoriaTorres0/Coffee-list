import React, { useEffect } from "react";
import "./ListCoffeeContainer.css";
import CoffeePriceCard from "./CoffeePriceCard.jsx";
function Listcoffeecontainer() {
  const [coffees, setCoffees] = React.useState([]);
  const [filtrado, setFiltrado] = React.useState([]);
  const [opcion, setOpcion] = React.useState("");

  const ObtenerCoffees = async () => {
    const respuesta = await fetch(
      "https://65ece95f0ddee626c9b10814.mockapi.io/api/coffe"
    );
    const resultado = await respuesta.json();
    setCoffees(resultado);
    setFiltrado(resultado);
  };

  const CoffeeFilter = () => {
    const disponibles = coffees.filter((cafe) => cafe.sold_out === false);
    setFiltrado(disponibles);
    setOpcion("boton-2");
  };

  const todosLosCafes = () => {
    setFiltrado(coffees);
    setOpcion("boton-1");
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
            <button
              className={`article-content__button ${
                opcion === "boton-1" ? "botonSeleccionado" : ""
              }`}
              onClick={() => todosLosCafes()}
            >
              {" "}
              All Products
            </button>
            <button
              className={`article-content__button ${
                opcion === "boton-2" ? "botonSeleccionado" : ""
              }`}
              onClick={() => CoffeeFilter()}
            >
              Available Now
            </button>
          </div>
        </div>
      </div>
      <div className="Card-container">
        {filtrado.map((coffee) => (
          <CoffeePriceCard
            title={coffee.title}
            image={coffee.image}
            id={coffee.id}
            price={coffee.price}
            delimited={coffee.sold_out}
            popular={coffee.popular}
            rating={coffee.rating}
            votes={coffee.votes}
          />
        ))}
      </div>
    </div>
  );
}

export default Listcoffeecontainer;
