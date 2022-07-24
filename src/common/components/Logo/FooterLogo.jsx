import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

function FooterLogo({ className }) {
  return (
    <Logo className={`${className} h-[1.8125rem] w-auto brightness-[5]`} />
  );
}

FooterLogo.propTypes = {
  className: PropTypes.string,
};

FooterLogo.defaultProps = {
  className: "",
};

export default FooterLogo;
