import Image from "next/image";
import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="bg-primary text-white">
      <Header/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}
