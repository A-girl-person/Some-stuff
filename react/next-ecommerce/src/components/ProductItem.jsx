"use client";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "@/lib/ShoppingCartContext";

const ProductItem = ({ product, removeItem }) => {
  const { removeFromCart } = useContext(ShoppingCartContext);
  if (!product) return null;
  return (
    <div className="mb-5">
      <div className="grid grid-cols-3 gap-3 ">
        <div className="relative h-[50px]">
          <Image src={product.image} fill alt="image" />
        </div>
        <div className="col-span-2">
          <h6 className=" text-sm">{product.title}</h6>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="text-red-800"
          onClick={() => removeFromCart(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
