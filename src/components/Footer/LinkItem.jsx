import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkItem({ className, to, children }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

LinkItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

LinkItem.defaultProps = {
  className: "",
};

export default LinkItem;
