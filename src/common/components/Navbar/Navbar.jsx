import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";
import Backdrop from "./Backdrop";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const switchIsVisible = () => setIsVisible((prevState) => !prevState);

  return (
    <header
      className="
      fixed top-0 z-50 grid h-16 w-full place-items-center bg-white
      md:static md:h-24"
    >
      <div
        className="
        flex w-full max-w-[69.125rem] items-center justify-center
        md:justify-start md:pb-[1.3125rem] md:pl-[2.4375rem] md:pr-10 md:pt-[1.375rem]
        xl:ml-1 xl:p-0"
      >
        <Hamburger isVisible={isVisible} onClick={switchIsVisible} />
        <Logo
          className="
          md:mr-[6.75rem]
          lg:mr-[5.625rem]"
        />
        <Nav isVisible={isVisible} onClick={switchIsVisible} />
        <Backdrop isVisible={isVisible} onClick={switchIsVisible} />
      </div>
    </header>
  );
}

export default Navbar;
