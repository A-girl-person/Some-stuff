import Cart from "./Cart/CartItem";
import "./App.css";
import CartInventory from "./Cart/CartInventory";
import React, { useEffect } from "react";
import { useState } from "react";

function App() {
  const [items, setItems] = useState("");
  const [collectedItems, setCollectedItems] = useState([]);

  const handleItemsClick = (item) => {
    setCollectedItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (itemId) => {
    const items = collectedItems.filter((c) => c.id !== itemId);

    setCollectedItems(items);
  };

  console.log(collectedItems);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data.products));
  }, []);

  return (
    <div className="flex">
      <Cart items={items} handleItemsClick={handleItemsClick} />
      <CartInventory collectedItems={collectedItems} removeItem={removeItem} />
    </div>
  );
}

export default App;
