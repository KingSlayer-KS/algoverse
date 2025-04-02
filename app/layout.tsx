"use client";
import "./globals.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
       
        {children}
        <Footer />
      </body>
    </html>
  );
}
