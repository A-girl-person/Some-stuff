"use client";
import Header from "../../login/Header";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Pick({ params: { cat } }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch(
        `https://fakestoreapi.com/products/category/${cat}`
      );
      const products = await data.json();
      setProducts(products);
    };
    fetchProducts();
  }, [cat]);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-11 m-8 p-11">
        {products.map((product) => (
          <Link href={`/products/${product.id}/`} key={product.id}>
            <div>
              <div className="border p-auto relative w-[300px] h-[400px]">
                <Image
                  src={product.image}
                  fill
                  className="object-cover"
                  alt={product.title}
                />
              </div>
              <div>
                <p>{product.title}</p>
                <p>USD: {product.price}</p>
                <p>Category: {product.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Pick;
