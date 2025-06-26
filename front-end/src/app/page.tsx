import Image from "next/image";
import "tailwindcss";
import Footer from "./footer";
import Body from "./body";
import Header from "./header";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <div className="grid grid-rows-[20px_1fr_20px] items-center max-w-full justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-montserrat)]">
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}
