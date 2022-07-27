import React from "react";
import PropTypes from "prop-types";

function EnumerationCard(props) {
  const { imageHref, no, title, description } = props;

  return (
    <figure className="">
      <div className="relative">
        <img className="mx-auto rounded-full" src={imageHref} alt={title} />
        <div
          className="
          absolute left-1/2 bottom-0 grid h-24 w-24 translate-y-12 -translate-x-1/2
            place-items-center rounded-full bg-yellow text-center font-monospace text-24 font-bold text-dark-navy
          md:translate-y-[3.4375rem]"
        >
          {no}
        </div>
      </div>
      <figcaption
        className="
        mt-16
        md:mt-[5.4375rem]"
      >
        <h3 className="mb-[1.6875rem] text-center font-monospace text-24 font-bold text-dark-navy">
          {title}
        </h3>
        <p className="text-center font-sans-serif text-15 text-dim-grey">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

EnumerationCard.propTypes = {
  imageHref: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EnumerationCard;
