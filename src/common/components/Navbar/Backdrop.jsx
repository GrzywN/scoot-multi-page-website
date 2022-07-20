import PropTypes from "prop-types";

function Backdrop({ isMenuOpen, onClick }) {
  return (
    <div
      className={`${isMenuOpen ? "opacity-1" : "pointer-events-none opacity-0"} 
      fixed inset-0 top-16 z-10 cursor-auto bg-black/75 transition-opacity duration-500 ease-in-out 
      md:hidden`}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      role="button"
      tabIndex="0"
      aria-label="Toggle menu"
    />
  );
}

Backdrop.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
