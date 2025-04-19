"use client";
import "./globals.css";
import Footer from "@/Components/Footer";

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
