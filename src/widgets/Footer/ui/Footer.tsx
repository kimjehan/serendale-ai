import Link from "next/link";

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
export const Footer = () => {
  return (
    <footer className="pt-40 pb-15 container mx-auto space-y-15">
      <hr className="border-neutral-800" />
      <article className="flex justify-between items-center px-8 py-8 rounded-3xl bg-white/7">
        <nav className="flex items-center gap-6">
          {icons.map((v, i) => (
            <Link className="size-7" href={v.href} key={i}>
              <img
                className="w-full h-full object-cover"
                src={v.img}
                alt={v.href}
              />
            </Link>
          ))}
        </nav>
        <p>© With Love by Jahangir.dev</p>
      </article>
    </footer>
  );
};
