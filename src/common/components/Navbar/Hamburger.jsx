import PropTypes from "prop-types";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";

function Hamburger({ isMenuOpen, onClick }) {
  return (
    <button
      type="button"
      className="
      absolute left-8 top-1/2 z-50 -translate-y-1/2 
      sm:hidden"
      onClick={onClick}
    >
      <img
        className=""
        src={isMenuOpen ? closeIcon : hamburgerIcon}
        alt="Menu"
      />
    </button>
  );
}

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
