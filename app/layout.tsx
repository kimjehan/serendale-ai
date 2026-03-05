import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../src/widgets/Header/ui/Header";
import { Footer } from "../src/widgets/Footer/ui/Footer";

const font = Montserrat();

export const metadata: Metadata = {
  title: "Serendale AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
