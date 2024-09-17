import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  return (
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
  );
}
