"use client";

import React, { useState, createContext, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shoppingCart"));
    setCart(savedCart);
  }, []);
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    setCart(updatedCart);

    useEffect(() => {
      const shoppingCart =
        JSON.parse(localStorage.getItem("shoppingCart")) || [];
      setCart(shoppingCart);
    }, []);
  };
  const removeFromCart = (productId) => {
      const remove = cart.filter((c) => c.id !== productId);
    };
    const clearCart = () => {
      setCart([]);
    };
    return (
      <ShoppingCartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </ShoppingCartContext.Provider>
    );
  };
};
