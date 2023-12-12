import "./BasketItem.scss";

const BasketItem = (props) => {
  const { orderedProduct, onProductRemove, orderCount } = props;
  const { name, price } = orderedProduct;
  {
    /*z propsów wyciągamy:
orderedProduct, który mówi nam jaki produkt zamówiliśmy
onProductRemove, który przekazuje bańkowo do app'a informacje o usunięciu produktu
oraz orderCount, czyli ilość zamiówonego produktu
taksamo wyciągamy z ordered próducts 2 żeczy, nazwę oraz cenę produktu
*/
  }

  const handelButtonClick = () => {
    onProductRemove(orderedProduct);
    {
      /*początek bańki która zostanie przekazana do Basket */
    }
  };

  return (
    <li className="basket-item">
      <div className="info">
        <span>{orderCount}</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={handelButtonClick}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
