import React from "react";
import PropTypes from "prop-types";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link to="/">
      <img
        className={`${className} 
        transition-transform duration-500 ease-in-out will-change-transform hover:scale-105
        `}
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
