import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="lg:text-2xl md:text-xl  sm:text-lg text-base font-medium"
    >
      SITE NAME
    </Link>
  );
};
