import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();

  return (
    <div className="grid grid-cols-4 gap-11 m-8 p-11">
      {products.map((product) => {
        return (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="flex">
              <div className="border p-auto">
                <Image
                  src={product.image}
                  width={500}
                  height={500}
                  className="object-cover"
                  alt=""
                />
                <p>{product.title}</p>
                <p>USD: {product.price}</p>
                <p>Category: {product.category}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
