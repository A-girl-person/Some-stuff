import React from "react";
import Image from "next/image";
import Header from "@/app/Categories/Header";
import MicrosoftSupport from "../../../components/Microsoft";
import AddToCart from "@/components/AddToCart";

const page = async ({ params: { id } }) => {
  let data = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await data.json();
  console.log(product);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div key={[[product.id]]} className="flex all">
        <div className="product-image relative w-[300px]s h-[300px]">
          <Image src={product.image} fill alt="" />
        </div>
        <div className="text">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}$</p>
          <p>Rating {product.rating.rate}</p>
          <p>Reviewed by {product.rating.count} people.</p>
          <div>
            <AddToCart product={product} />
          </div>
        </div>
      </div>
      <div>
        <MicrosoftSupport product={product} />
      </div>
    </div>
  );
};

export default page;
