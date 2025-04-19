import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "animate.css";

export default function Products() {
  return (
    <>
      <Header />
      <div className="animate__animated animate__fadeIn">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
