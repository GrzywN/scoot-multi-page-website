import React from "react";
import PropTypes from "prop-types";
import hamburgerIcon from "../../../assets/icons/hamburger.svg";
import closeIcon from "../../../assets/icons/close.svg";

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
        src={isVisible ? closeIcon : hamburgerIcon}
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
