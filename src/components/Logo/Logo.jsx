import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

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
