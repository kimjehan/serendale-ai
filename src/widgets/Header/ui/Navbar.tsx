import Link from "next/link";
import { navbarIcons, navbarLinks } from "../data/navbar";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center gap-10">
        {navbarLinks.map((v, i) => (
          <Link
            className="lg:text-lg md:text-base text-sm hover:underline "
            key={i}
            href={v.href}
          >
            {v.title}
          </Link>
        ))}
      </nav>
      <nav className="flex items-center gap-4">
        {navbarIcons.map((v, i) => (
          <Link className="size-5" href={v.href} key={i}>
            <img
              className="w-full h-full object-cover"
              src={v.img}
              alt={v.href}
            />
          </Link>
        ))}
      </nav>
    </>
  );
};
