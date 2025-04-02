import Clients from "@/Components/Clients";
import Cta from "@/Components/Cta";
import Stats from "@/Components/Stats";
import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import Teams from "@/Components/Teams";
import Hero from "@/Components/Hero";
export default function Products() {
  return( 
  <>
      <Header />
      <Hero/>
      <div className="px-24 sm:px-32">
        <Teams />
      </div>
      <Clients/>
      <Stats/>
      <Cta/>
  </>)
}