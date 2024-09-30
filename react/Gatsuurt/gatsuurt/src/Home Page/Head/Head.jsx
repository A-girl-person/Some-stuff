import Image from "next/image";
import Link from "next/link";

function Head() {
  return (
    <div className="bg-yellow">
      <div>
        <Link href={"/"}>
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </div>
  );
}

export default Head;
