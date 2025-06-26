import Image from "next/image";
import "tailwindcss";
import Footer from "./footer";
import Body from "./body";
import Header from "./header";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Body/>
      <hr className="h-0.5 border-t-0 bg-neutral-900 mb-6 md:mb-10" />
      <Footer/>
    </div>
  );
}
