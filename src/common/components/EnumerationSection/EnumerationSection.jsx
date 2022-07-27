import React from "react";
import PropTypes from "prop-types";
import EnumerationCard from "./EnumerationCard";

function EnumerationSection(props) {
  const { title, cardImages, cardTitles, cardDescriptions } = props;

  return (
    <section className="flex w-full justify-center">
      <div
        className="
        max-w-[28.5625rem] px-8
        md:px-0
        xl:max-w-[69.375rem]"
      >
        <h2
          className="
          text-center font-monospace text-32 font-bold text-dark-navy
          md:text-48"
        >
          {title}
        </h2>
        <div
          className="
          mt-16 grid grid-cols-1 gap-14
          md:mt-[6.5625rem] md:gap-[3.4375rem]
          xl:mt-[6.4375rem] xl:grid-cols-3 xl:gap-[1.875rem]"
        >
          {cardImages.map((imageHref, index) => (
            <EnumerationCard
              key={imageHref}
              no={`0${index + 1}`}
              imageHref={imageHref}
              title={cardTitles[index]}
              description={cardDescriptions[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

EnumerationSection.propTypes = {
  title: PropTypes.string.isRequired,
  cardImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EnumerationSection;
