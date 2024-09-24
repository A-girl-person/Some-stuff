"use client";

import React, { useEffect, useState, useContext } from "react";
import ProductItem from "./ProductItem";
import { ShoppingCartContext } from "@/lib/ShoppingCartContext";
const Cart = () => {
  const { clearCart, cart } = useContext(ShoppingCartContext);
  console.log(cart, "cart");
  return (
    <div>
      <div className="h-[500px] overflow-scroll">
        {cart?.length > 0 ? (
          cart.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <button className=" text-yellow-700" onClick={() => clearCart()}>
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
