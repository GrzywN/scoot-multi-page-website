import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function Logo({ className }) {
  return (
    <Link
      className={`${className} 
      transition-transform duration-400 ease-in-out will-change-transform focus-within:scale-105 hover:scale-105`}
      to="/"
      tabIndex={0}
    >
      <img src={logo} alt="scoot" />
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
