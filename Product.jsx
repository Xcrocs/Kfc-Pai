import ProductModal from "../ProductModal/ProductModal";
import "./Product.scss";
import { useState } from "react";

const Product = (props) => {
  const { product, orderedProducts, onProductsConfirm } = props;
  const { name, price, description, imageUrl } = product; // informacje o prodókcie
  const [isModalOpen, setIsModalOpen] = useState(false);
  {
    /*mamy tutaj pare żeczy:
product, który zawiera informacje o produkcie, który wyświetlamy do ZAMÓWIENIA
orderedProducts,
oraz onProductConfirm, kolejna bańka
! mamy też useState, który dzieli się na isModalOpen oraz setIsModalOpen
*/
  }

  const handleButtonClick = () => {
    // onProductSelect(product);
    setIsModalOpen(true);
  };
  {
    /*kiedy klikamy na produkt, wyskakuje nam okno z tym produktem */
  }

  const handleClose = () => {
    setIsModalOpen(false);
  };
  {
    /*kiedy klikniemy poza oknem* lub na X, to zamknie na sę okno */
  }

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );
  {
    /*Kiedy JAKIKOLWIEK(some) pródukt jest zamówiony, to matchuje orderedProduct z tablicą product (tutaj tylko id) */
  }

  const orderCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === product.id
  ).length;
  {
    /*bierze orderedProduct i filtruje je w taki sposób, by każdy orderedProduct to była tablica (którą jest)
i wyświetla długośc tablicy, albo ilość TEGO SAMEGO produktu */
  }

  const handleProductsConfirm = (selectedProduct) => {
    onProductsConfirm(selectedProduct);
  };
  {
    /* banieczka by potwierdzić produkt, leci do app od Product modal */
  }

  return (
    <article
      className="product"
      style={{
        borderColor: isOrdered ? "#8ea604" : "transparent",
      }}
    >
      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={handleClose}
          onProductsConfirm={handleProductsConfirm}
        />
      )}{" "}
      {/*jeżeli produkt jest otwarty, to wyświetla okno z przyciskami, oraz produkt */}
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <footer>
          <strong>{price}</strong>
          <button
            onClick={handleButtonClick}
            style={{
              color: isOrdered ? "white" : undefined,
              background: isOrdered ? "#8ea604" : undefined,
              fontSize: isOrdered ? "16px" : undefined,
            }}
          >
            {isOrdered ? orderCount : "+"}{" "}
            {/*jeżeli nie jest zamówiony, to jest +, jak jest, to wyświetla jego ilość */}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Product;
