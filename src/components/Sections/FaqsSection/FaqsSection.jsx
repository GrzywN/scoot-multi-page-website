import React from "react";
import PropTypes from "prop-types";
import Accordion from "../../Accordion";

function FaqsSection({ faqsData, className }) {
  return (
    <div
      className={`${className} 
      mx-auto max-w-[69.375rem] px-8
      md:px-10
      xl:px-0`}
    >
      <h2
        className="
        text-center font-monospace text-32 font-bold text-dark-navy
        md:text-48"
      >
        FAQs
      </h2>
      {faqsData.map((item) => {
        const { title, content } = item;

        return (
          <div
            className="
            mt-12
            md:mt-16
            xl:flex xl:justify-between xl:gap-[1.875rem]"
            key={title}
          >
            <h3
              className="
              mb-8 text-center font-monospace text-24 font-bold text-dark-navy
              md:text-40
              xl:mb-0 xl:text-start"
            >
              {title}
            </h3>
            <Accordion className="max-w-[45.625rem]" contentsData={content} />
          </div>
        );
      })}
    </div>
  );
}

FaqsSection.propTypes = {
  faqsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          control: PropTypes.string.isRequired,
          panel: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

FaqsSection.defaultProps = {
  className: "",
};

export default FaqsSection;
