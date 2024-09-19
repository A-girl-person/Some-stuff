import Link from "next/link";
import Image from "next/image";

async function Page() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  console.log(products, "data");
  return (
    <div>
      <div className="grid grid-rows-4 grid-cols-4 gap-9">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  );
}

export default Page;
