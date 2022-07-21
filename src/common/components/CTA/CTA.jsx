import React from "react";
import PropTypes from "prop-types";

function CTA({ className }) {
  return (
    <a
      href="#download"
      className={`
        ${className}
        grid h-[3.3125rem] w-full place-items-center border-[0.1875rem] border-yellow bg-yellow font-button 
          text-button text-white transition-colors duration-500 ease-in-out hover:bg-transparent hover:text-yellow
        md:max-w-[11.25rem]`}
    >
      Get Scootin
    </a>
  );
}

CTA.propTypes = {
  className: PropTypes.string,
};

CTA.defaultProps = {
  className: "",
};

export default CTA;
