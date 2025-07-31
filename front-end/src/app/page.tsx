import "tailwindcss";
import Footer from "../components/footer/footer";
import Body from "../components/body/body";
import Header from "../components/header/header";
import Chat from "../components/chat/chat"

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Body/>
      <hr className="h-0.5 border-t-0 bg-neutral-900 mb-6 md:mb-10" />
      <Footer/>
      <Chat/>
    </div>
  );
}
