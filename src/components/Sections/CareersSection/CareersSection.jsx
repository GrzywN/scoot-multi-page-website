import React from "react";
import PropTypes from "prop-types";
import CareersCard from "./CareersCard";

const careers = [
  {
    job: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    job: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    job: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    job: "Graphic Designer",
    location: "New York, United States",
  },
  {
    job: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    job: "UX Analyst",
    location: "London, United Kingdom",
  },
];

function CareersSection({ className, ctaTo = "#" }) {
  return (
    <div
      className={`${className}
      grid gap-4 px-8
      md:px-10
      xl:gap-6`}
    >
      {careers.map((career) => {
        const { job, location } = career;
        return (
          <CareersCard key={job} job={job} location={location} ctaTo={ctaTo} />
        );
      })}
    </div>
  );
}

CareersSection.propTypes = {
  className: PropTypes.string,
  ctaTo: PropTypes.string,
};

CareersSection.defaultProps = {
  className: "",
  ctaTo: "#",
};

export default CareersSection;
