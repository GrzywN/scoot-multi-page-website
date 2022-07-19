import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";

function Logo({ className }) {
  return (
    <img
      className={`h-5 w-[4.7188rem] ${className}`}
      src={logo}
      alt="scoot"
      width="75.5"
      height="20"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: "",
};

export default Logo;
