import React from "react";
import PropTypes from "prop-types";

function SocialIcon({ className, href, src, alt }) {
  return (
    <li
      className={`${className} 
      transition-transform duration-500 ease-in-out will-change-transform hover:scale-125`}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <img src={src} alt={alt} />
      </a>
    </li>
  );
}

SocialIcon.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

SocialIcon.defaultProps = {
  alt: "",
  className: "",
};

export default SocialIcon;
