import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

function NavLogo({ className }) {
  return (
    <Logo
      className={`${className}
      h-5 w-[4.7188rem]
      md:h-[1.75rem] md:w-[6.6875rem]`}
    />
  );
}

NavLogo.propTypes = {
  className: PropTypes.string,
};

NavLogo.defaultProps = {
  className: "",
};

export default NavLogo;
