import { useState } from "react";
import "./ProductModal.scss";
import { MdOutlineArrowBack } from "react-icons/md";

const ProductModal = (props) => {
  const { product, onClose, onProductsConfirm } = props;
  const { name, price, description, imageUrl } = product;
  {
    /* sa 3 żeczy,
product, który ma opis wszystkiego co jest jak price czy name,
onClose, zamyka okno Modal,
oraz onProductConfirm, tutaj aktywuja się ta funkcja 
*/
  }

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddButtonClick = () => {
    setSelectedProducts([...selectedProducts, product]);
  };
  {
    /*tutaj jest funkcja dodająca zamówiony prodókt do tablicy w product modal, i czeka na confirm by je dodać do Basket */
  }

  const handleRemoveButtonClick = () => {
    const productIndex = selectedProducts.findIndex(
      (selectedProduct) => selectedProduct.name === product.name
    );
    const newSelectedProducts = [
      ...selectedProducts.slice(0, productIndex),
      ...selectedProducts.slice(productIndex + 1),
    ];
    setSelectedProducts(newSelectedProducts);
  };
  {
    /*
  tutaj jest funkcja która robi odwrotnie od Add button, usuwa prodókty o 1 jeżeli wciśniemy przycisk
    */
  }

  const handleConfirmButtonClick = () => {
    onProductsConfirm(selectedProducts);
    onClose();
  };
  {
    /*baniczka, ale przy zamówieniu, zamyka okno */
  }

  return (
    <div className="product-modal">
      <header>
        <button onClick={onClose}>
          <MdOutlineArrowBack />
        </button>
        <button></button>
      </header>
      <div>
        <img src={imageUrl} alt={name} />
        <div>
          <h2>{name}</h2>
          <h2>{price}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <button onClick={handleRemoveButtonClick}>-</button>
        <span>
          {
            selectedProducts.filter(
              (selectedProduct) => selectedProduct.name === product.name
            ).length
          }
        </span>
        {/*tutaj prztrzymujemy ilość produktu który chcemy zamówić */}
        <button onClick={handleAddButtonClick}>+</button>
        <button onClick={handleConfirmButtonClick}>Confirm</button>
      </div>
    </div>
  );
};

export default ProductModal;
