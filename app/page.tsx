"use client";
import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Stats from "@/Components/Stats";
import Clients from "@/Components/Clients";
import Cta from "@/Components/Cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero/>
      <Features/>
      <Stats/>
      <Clients/>
      <Cta/>
    </div>
  );
}
