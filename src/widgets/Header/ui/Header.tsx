"use client";

import { Logo } from "@/src/shared/ui/Logo";
import { Navbar } from "./Navbar";
import { useScreen } from "@/src/shared/contexts/screenContext";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import { navbarIcons, navbarLinks } from "../data/navbar";
import Link from "next/link";

export const Header = () => {
  const { lg } = useScreen();

  if (lg) {
    return <HeaderDesktop />;
  } else {
    return <HeaderMobile />;
  }
};

const HeaderDesktop = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-12">
      <Logo />
      <Navbar />
    </header>
  );
};

const HeaderMobile = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-0 bg-black/70  z-30">
      <header className="container mx-auto flex justify-between backdrop-blur-xs items-center py-6 px-3">
        <Logo />
        <button
          className="cursor-pointer p-2 hover:bg-neutral-900 rounded-xl transition-colors duration-300"
          onClick={() => setIsVisible(!isVisible)}
        >
          {!isVisible ? <Menu /> : <XIcon />}
        </button>
      </header>
      {isVisible && (
        <div className="fixed left-4 right-4 z-50 flex flex-col items-center gap-10 rounded-xl py-8 shadow border border-neutral-800 bg-neutral-900/70 backdrop-blur-xs">
          <nav className="flex flex-col text-xl gap-3">
            {navbarLinks.map((v, i) => (
              <Link key={i} href={v.href}>
                {v.title}
              </Link>
            ))}
          </nav>
          <nav className="flex items-center gap-4">
            {navbarIcons.map((v, i) => (
              <Link className="size-8" href={v.href} key={i}>
                <img
                  className="w-full h-full object-cover"
                  src={v.img}
                  alt={v.href}
                />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
