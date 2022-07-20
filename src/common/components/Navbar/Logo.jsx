import PropTypes from "prop-types";
import logo from "../../../assets/logo.svg";

function Logo({ className }) {
  return (
    <a href="/">
      <img
        className={`${className} 
        h-5 w-[4.7188rem] transition-transform duration-500 ease-in-out hover:scale-105
        md:h-[1.75rem] md:w-[6.6875rem]`}
        src={logo}
        alt="scoot"
      />
    </a>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: "",
};

export default Logo;
