"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" // Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white">
         Get Quote.{" "}
          <a href="/contact-us" className="font-semibold text-indigo-400 hover:text-indigo-300">
            Contact Us →
          </a>
        </p>

        <h1 className="text-3xl sm:text-6xl font-bold text-white">
        We pride ourselves on delivering bespoke IT services
        </h1>

        

        
      </div>
    </div>
  );
}
