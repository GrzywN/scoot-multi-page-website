import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CTA from "../CTA";

function Nav({ isVisible, onClick }) {
  const [navVisibleClasses, navNotVisibleClasses] = [
    "scale-x-100 opacity-100",
    "scale-x-0 opacity-0",
  ];

  const linkClasses = `
    relative duration-500 ease-in-out
    md:before:absolute md:before:bottom-0 md:before:h-1 md:before:w-full md:before:translate-y-3
      md:before:scale-x-0 md:before:bg-yellow md:before:rounded-full
        md:before:transition-transform md:before:content-[''] md:hover:before:scale-x-100 md:focus-within:before:scale-x-100`;

  return (
    <nav
      className={`${isVisible ? navVisibleClasses : navNotVisibleClasses} 
      fixed top-16 bottom-0 left-0 z-50 flex w-full max-w-[16rem] origin-top-left flex-col 
        justify-between bg-dark-navy px-8 pb-6 pt-16 transition duration-500 ease-in-out 
      md:static md:max-w-none md:scale-x-100 md:flex-row md:items-center md:bg-white md:p-0 md:opacity-100`}
    >
      <ul
        className="
        grid gap-6 font-monospace text-18 font-bold text-light-grey
        md:flex md:gap-8 md:text-15 md:text-dim-grey"
      >
        <li className={linkClasses}>
          <Link onClick={onClick} to="/about">
            About
          </Link>
        </li>
        <li className={linkClasses}>
          <Link onClick={onClick} to="/locations">
            Location
          </Link>
        </li>
        <li className={linkClasses}>
          <Link onClick={onClick} to="/careers">
            Careers
          </Link>
        </li>
      </ul>
      <CTA onClick={onClick} to="#download" text="Get Scootin" />
    </nav>
  );
}

Nav.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Nav;
