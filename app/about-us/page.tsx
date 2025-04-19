import Clients from "@/Components/Clients";
import Cta from "@/Components/Cta";
import Stats from "@/Components/Stats";
import Header from "@/Components/Header";
import Teams from "@/Components/Teams";
import Hero from "@/Components/Hero";
import "./globals.css";

export default function Products() {
  return( 
  <>
  <div className="animate__animated animate__fadeIn">
 
  <Header />
      <Hero/>
      <div className="px-24 sm:px-32">
        <Teams />
      </div>
      <Clients/>
      <Stats/>
      <Cta/>
</div>

      
  </>)
}