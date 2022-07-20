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
      md:h-24"
    >
      <div
        className="
        flex w-full max-w-[69.125rem] items-center justify-center
        md:justify-start md:pb-[1.3125rem] md:pl-[2.4375rem] md:pr-10 md:pt-[1.375rem]
        xl:ml-1 xl:p-0"
      >
        <Hamburger isMenuOpen={isMenuOpen} onClick={switchIsMenuOpen} />
        <Logo className="md:mr-[5.625rem]" />
        <Nav isMenuOpen={isMenuOpen} onClick={switchIsMenuOpen} />
        <Backdrop isMenuOpen={isMenuOpen} onClick={switchIsMenuOpen} />
      </div>
    </header>
  );
}

export default Navbar;
