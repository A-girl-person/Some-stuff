"use client";
import { ShoppingCartContext } from "@/lib/ShoppingCartContext";
import React, { useEffect, useContext } from "react";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <button
      className=" bg-yellow-500 text-white rounded-md py-3"
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
