import { useEffect, useState } from "react";
import "./ListCoffeeContainer.css";
import CoffeePriceCard from "../components/CoffeePriceCard.jsx";

function Listcoffeecontainer() {
  const [coffees, setCoffees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedButton, setSelectedButton] = useState(1);

  const getCoffees = async () => {
    const respuesta = await fetch(
      "https://65ece95f0ddee626c9b10814.mockapi.io/api/coffe"
    );
    const resultado = await respuesta.json();
    setCoffees(resultado);
    setFiltered(resultado);
  };

  const filterSoldOutCoffees = () => {
    const allCoffees = coffees.filter((cafe) => cafe.sold_out === false);
    setFiltered(allCoffees);
    setSelectedButton(2);
  };

  const filterAllCoffees = () => {
    setFiltered(coffees);
    setSelectedButton(1);
  };

  useEffect(() => {
    getCoffees();
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
                selectedButton === 1 ? "botonSeleccionado" : ""
              }`}
              onClick={filterAllCoffees}
            >
              All Products
            </button>
            <button
              className={`article-content__button ${
                selectedButton === 2 ? "botonSeleccionado" : ""
              }`}
              onClick={filterSoldOutCoffees}
            >
              Available Now
            </button>
          </div>
        </div>
      </div>
      <div className="Card-container">
        {filtered.map((coffee) => (
          <CoffeePriceCard
            key={coffee.id}
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
