"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import Slider from "react-slick";

const MicrosoftSupport = ({ product }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function fetchProducts() {
      let res = await fetch(
        `https://fakestoreapi.com/products/category/${product.category}`
      );
      let data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  });
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    slidesPerRow: 2,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products &&
          products.map((product) => {
            return (
              <Link href={`/products/${product.id}/`} key={product.id}>
                <div className="">
                  <div className="border p-auto relative w-[300px] h-[400px]">
                    <Image
                      src={product.image}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>{product.title}</p>
                    <p>USD: {product.price}</p>
                    <p>Category: {product.category}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default MicrosoftSupport;
