import React from "react";
import PropTypes from "prop-types";

import iconHamburger from "../../assets/icons/hamburger.svg";
import iconClose from "../../assets/icons/close.svg";

function Hamburger({ isVisible, onClick }) {
  return (
    <button
      type="button"
      className="
      absolute left-8 top-1/2 z-50 -translate-y-1/2 
      md:hidden"
      onClick={onClick}
    >
      <img
        className=""
        src={isVisible ? iconClose : iconHamburger}
        alt="Menu"
      />
    </button>
  );
}

Hamburger.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
