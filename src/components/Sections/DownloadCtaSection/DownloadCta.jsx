import React from "react";
import PropTypes from "prop-types";

function DownloadCta({ href, alt = "", src }) {
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

DownloadCta.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

DownloadCta.defaultProps = {
  alt: "",
};

export default DownloadCta;
