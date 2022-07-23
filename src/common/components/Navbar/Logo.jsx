import React from "react";
import PropTypes from "prop-types";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link to="/">
      <img
        className={`${className} 
        h-5 w-[4.7188rem] transition-transform duration-500 ease-in-out hover:scale-105
        md:h-[1.75rem] md:w-[6.6875rem]`}
        src={logo}
        alt="scoot"
      />
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: "",
};

export default Logo;
