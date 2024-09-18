import Image from "next/image";
import Link from "next/link";

const MicrosoftSupport = async ({ product }) => {
  let dataa = await fetch(
    `https://fakestoreapi.com/products/category/${product.category}`
  );
  let scams = await dataa.json();
  console.log(scams);
  return (
    <div className="">
      {scams.map((scam) => {
        <Link href={`/products/${scam.id}/`} key={scam.id}>
          <div className="">
            <div className="border p-auto relative w-[300px] h-[400px]">
              <Image src={scam.image} fill className="object-cover" alt="" />
            </div>
            <div>
              <p>{scam.title}</p>
              <p>USD: {scam.price}</p>
              <p>Category: {scam.category}</p>
            </div>
          </div>
        </Link>;
      })}
    </div>
  );
};

export default MicrosoftSupport;
