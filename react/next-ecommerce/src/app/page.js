import Header from "@/app/Categories/Header";
import Page from "./products/page";
import Cookies from "./C's/Cookie";

export default function Wow() {
  return (
    <div>
      <Header />
      <Page />
      <div className="bg-yellow-500 text-center">
        <Cookies />
      </div>
    </div>
  );
}
