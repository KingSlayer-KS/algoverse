"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DevAgency
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative bg-blue-600 text-white py-24 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold">Empowering Your Business with IT Solutions</h1>
          <p className="mt-4 text-lg">We build scalable and secure technology solutions for your business.</p>
          <Link href="#services">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-gray-200">
              Explore Our Services
            </button>
          </Link>
        </div>
      </header>

      {/* Landing Page Sections */}
      <main className="container mx-auto px-6 py-12">
        {/* About Us Section */}
        <section id="about" className="my-16 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">About Us</h2>
          <p className="mt-4 text-gray-700">
            We are an IT development agency specializing in web and mobile applications, cloud solutions, and AI-driven technology.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="my-16">
          <h2 className="text-3xl font-semibold text-center text-blue-600">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <Image src="https://source.unsplash.com/400x300/?technology" alt="Web Development" width={400} height={300} className="rounded-md" />
              <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
              <p className="text-gray-600">We create responsive and high-performing web applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <Image src="https://source.unsplash.com/400x300/?cloud" alt="Cloud Solutions" width={400} height={300} className="rounded-md" />
              <h3 className="mt-4 text-xl font-semibold">Cloud Solutions</h3>
              <p className="text-gray-600">Secure and scalable cloud computing services.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <Image src="https://source.unsplash.com/400x300/?ai" alt="AI & Automation" width={400} height={300} className="rounded-md" />
              <h3 className="mt-4 text-xl font-semibold">AI & Automation</h3>
              <p className="text-gray-600">AI-powered tools to streamline your business operations.</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="my-16 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Our Products</h2>
          <p className="mt-4 text-gray-700">We develop enterprise-grade software products tailored for businesses.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} DevAgency. All rights reserved.</p>
      </footer>
    </div>
  );
}
