"use client";

import React, { useState, createContext, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    setCart(savedCart);
  }, []);
  console.log(cart, "cart ct");
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  const removeFromCart = (productId) => {
    const extra = cart.filter((item) => item.id !== productId);
    localStorage.setItem("shoppingCart", JSON.stringify(extra));
    setCart(extra);
  };
  const clearCart = () => {
    const clear = localStorage.clear("shoppingCart") || [];
    setCart(clear);
  };
  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
