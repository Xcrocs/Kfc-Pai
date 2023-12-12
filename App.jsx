import { useState } from "react";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  {
    /*
Ważne! setOrderedProducts to wszystkie żeczy w koszyku, tabela która ma produkty
*/
  }

  const handleProductSelect = (product) => {
    setOrderedProducts([...orderedProducts, product]);
  };
  {
    /** funkcja dodająca produkty do tabeli */
  }

  const handleProductRemove = (orderedProducts) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };
  {
    /*
  filtruje produkty który chcemy usunąć
 */
  }

  const handleProductsConfirm = (selectedProducts) => {
    setOrderedProducts([...orderedProducts, ...selectedProducts]);
  };
  {
    /* dodaje po potwierdzeniu w product modal produkty do tablicy */
  }

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      />
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={handleProductSelect}
              onProductsConfirm={handleProductsConfirm}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
