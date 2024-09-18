import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "components/Slick";

export default async function Home() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="grid grid-cols-4 gap-11 m-8 p-11">
            {products.map((product) => {
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
          </div>
        </div>
      </Slider>
    </div>
  );
}
