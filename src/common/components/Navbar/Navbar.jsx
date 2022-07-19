import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";
import Backdrop from "./Backdrop";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const switchIsMenuOpen = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <header
      className="
      relative grid h-16 w-full place-items-center bg-white 
      sm:h-24"
    >
      <div
        className="
        flex w-full max-w-[69.125rem] items-center justify-center
        sm:justify-start sm:pb-[1.3125rem] sm:pl-[2.4375rem] sm:pr-10 sm:pt-[1.375rem]
        md:ml-1"
      >
        <Hamburger isMenuOpen={isMenuOpen} onClick={switchIsMenuOpen} />
        <Logo className="sm:mr-[3.625rem]" />
        <Nav isMenuOpen={isMenuOpen} onClick={switchIsMenuOpen} />
        <Backdrop isMenuOpen={isMenuOpen} onClick={switchIsMenuOpen} />
      </div>
    </header>
  );
}

export default Navbar;
