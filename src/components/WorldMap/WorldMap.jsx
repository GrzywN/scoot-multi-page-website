import React from "react";
import PropTypes from "prop-types";

import imageWorldMapMobile from "../../assets/images/world-map-mobile.png";
import imageWorldMapTablet from "../../assets/images/world-map-tablet.png";
import imageWorldMapDesktop from "../../assets/images/world-map-desktop.png";

const breakpoints = {
  tablet: "(min-width: 48em)",
  desktop: "(min-width: 80em)",
};

const locations = ["New York", "London", "Jakarta", "Yokohama"];

function WorldMap({ className }) {
  const locationCardsClasses =
    "min-h-[4.5rem] bg-light-yellow grid place-items-center";

  return (
    <div className={`${className} flex flex-col items-center gap-10 px-8`}>
      <picture>
        <source media={breakpoints.desktop} srcSet={imageWorldMapDesktop} />
        <source media={breakpoints.tablet} srcSet={imageWorldMapTablet} />
        <img src={imageWorldMapMobile} alt="World map" />
      </picture>
      <div
        className="
        grid w-full gap-4 font-monospace text-24 font-bold text-dark-navy
        md:hidden"
      >
        {locations.map((location) => (
          <div className={locationCardsClasses} key={location}>
            {location}
          </div>
        ))}
      </div>
    </div>
  );
}

WorldMap.propTypes = {
  className: PropTypes.string,
};

WorldMap.defaultProps = {
  className: "",
};

export default WorldMap;
