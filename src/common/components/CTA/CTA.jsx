import React from "react";
import PropTypes from "prop-types";

function CTA({ className, href, text }) {
  return (
    <a
      href={href}
      className={`
      ${className}
      grid h-[3.3125rem] w-full place-items-center border-[0.1875rem] border-yellow bg-yellow font-monospace text-15 
        font-bold text-white transition-colors duration-500 ease-in-out hover:bg-transparent hover:text-yellow
      md:max-w-[11.25rem]`}
    >
      {text}
    </a>
  );
}

CTA.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

CTA.defaultProps = {
  className: "",
};

export default CTA;
