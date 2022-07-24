import React from "react";
import PropTypes from "prop-types";

function DownloadButton({ href, alt = "", src }) {
  return (
    <a className="" href={href}>
      <img
        className="h-10 w-auto xl:h-14"
        src={src}
        alt={alt}
        target="_blank"
      />
    </a>
  );
}

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

DownloadButton.defaultProps = {
  alt: "",
};

export default DownloadButton;
