import Link from "next/link";

const links = [
  { title: "Smart Contracts", href: "#" },
  { title: "Services", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Roadmap", href: "#" },
  { title: "Whitepaper", href: "#" },
];

const icons = [
  {
    img: "/icons/github.svg",
    href: "#",
  },
  {
    img: "/icons/discord.svg",
    href: "#",
  },
  {
    img: "/icons/reddit.svg",
    href: "#",
  },
  {
    img: "/icons/twitter.svg",
    href: "#",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center gap-10">
        {links.map((v, i) => (
          <Link className="text-lg hover:underline" key={i} href={v.href}>
            {v.title}
          </Link>
        ))}
      </nav>
      <nav className="flex items-center gap-4">
        {icons.map((v, i) => (
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
