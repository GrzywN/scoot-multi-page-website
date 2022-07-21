import React from "react";
import PropTypes from "prop-types";
import CTA from "../CTA";

function Nav({ isMenuOpen }) {
  return (
    <nav
      className={`${
        isMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
      } 
      fixed top-16 bottom-0 left-0 z-50 flex w-full max-w-[16rem] origin-top-left flex-col 
        justify-between bg-dark-navy px-8 pb-6 pt-16 transition duration-500 ease-in-out 
      md:static md:max-w-none md:scale-x-100 md:flex-row md:items-center md:bg-white md:p-0 md:opacity-100`}
    >
      <ul
        className="
        grid gap-6 font-nav-list text-nav-list text-light-grey
        md:flex md:gap-8 md:text-body md:text-dim-grey"
      >
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/location">Location</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
      </ul>
      <CTA />
    </nav>
  );
}

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Nav;
