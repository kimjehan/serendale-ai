import { Logo } from "@/src/shared/ui/Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-12">
      <Logo />
      <Navbar />
    </header>
  );
};
