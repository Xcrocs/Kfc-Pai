import { groupBy } from "../../utils";
import BasketItem from "../BasketItem/BasketItem";
import "./Basket.scss";

const Basket = (props) => {
  const { orderedProducts, onProductRemove } = props;
  const orderCount = orderedProducts.length;
  {
    /*dzieli to na orderedProducts oraz onProduct remove, 
    taksamo tworzy orderCount, co jest długością tablicy orderedProducts*/
  }

  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price,
    0
  );
  {
    /* bierze tablice orderedProducts, a potem bierze to price by dodawać ją do akumulatora (acc)*/
  }

  const groupedOrderProducts = Object.entries(
    groupBy(orderedProducts, (product) => product.id)
  );
  {
    /*sortutje produkty w basket tak, zeby zamiast 2 burgerów pokazał się 2x burger */
  }

  const handleProductRemove = (orderedProducts) => {
    onProductRemove(orderedProduct);
  };
  {
    /*to używamy w app, ale śłuży do przekazania wiadomości o usunieciu prodóktu z BasketItem, prze Basket, do app */
  }

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderCount} products)</span>{" "}
          {/* {liczba produktów w tablicy} products*/}
        </h5>
        <button>X</button>
      </header>
      <div>
        <ul>
          {groupedOrderProducts.map(([name, orderedProducts]) => (
            <BasketItem
              orderCount={orderedProducts.length}
              orderedProduct={orderedProducts[0]}
              onProductRenove={handleProductRemove}
            />
          ))}{" "}
          {/*tutaj dzieje się pare żeczy,
          BasketItem przekazuje nam nazwe przedmiotu ORAZ zamówiony produkt
          potem mam wświetlany orderCount, 
          potem orderedProduct, który mówi nam o zamówionym produkcie 
          a na końcu jest funkcja która usuwa przedmity jeśli naciśniemy przycisk*/}
        </ul>
      </div>
      <footer>
        <button>Order and Pay ({totalCost.toFixed(2)})</button>{" "}
        {/*
        tutaj mamy przycisk fixed (jest stały)który wyświetla ostateczną cenę 
        */}
      </footer>
    </div>
  );
};

export default Basket;
