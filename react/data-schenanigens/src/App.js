import { useState } from "react";
import "./App.css";
import React from "react";
import styled from 'styled-components';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", stock: 10 },
    { id: 2, name: "Banana", stock: 0 },
    { id: 3, name: "Orange", stock: 15 },
  ]);

  const [cart, setCarts] = useState([
    { id: 1, name: "Apple", quantity: 5 },
    { id: 2, name: "Banana", quantity: 2 },
    { id: 3, name: "Strawberry", quantity: 7 },
  ]);

  const one = products.find((p) => p.name === "Banana");
  const three = products.filter((p) => p.stock === 0);
  const four = cart.filter((c) => c.quantity === 0);
  const five = three.concat(four);
  const nine = cart.includes((c) => c.name === "kiwi");
  const fruitNinja = products.slice(1);
  const eight = products.splice(1, 2);
  const seven = cart.some(Available);
  // const six = products.concat(cart);
  // const ten = six.map((s) => s.name);
  // const eleven = ten.join();
  const twelve = ;
  function Available(cart, products) {
    return cart.quantity > products.stock;
  };
  function iwik() {
    if (nine === false) {
      return "your cart doesn't have kiwi";
    } else {
      return "your cart has kiwi";
    }
  }
  function Seven() {
    if (seven === false) {
      return "nothing";
    } else {
      return "out of stock";
    }
  }
  console.log(eleven);
  return (
    <div>
      <p>{one.name}</p>
      <p>{five.map((f) => f.stock)}</p>
      <p>{iwik()}</p>
      <p>{fruitNinja.map((fN) => fN.name)}</p>
      <p>{eight.map((e) => e.name)}</p>
      <p>{Seven()}</p>
      {/* <p>{eleven}</p> */}
      <p></p>
    </div>
  );
}

export default App;
