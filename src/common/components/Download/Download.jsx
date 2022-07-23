import React from "react";
import PropTypes from "prop-types";
import AppStoreIcon from "/src/assets/icons/app-store.svg";
import GooglePlayIcon from "/src/assets/icons/google-play.svg";

function Download({ className }) {
  return (
    <section
      className="
      w-full bg-dark-navy 
      xl:max-w-[90rem]"
    >
      <div
        className={`${className} 
        mx-auto flex h-80 flex-col items-center justify-center gap-10 bg-semi-circles bg-[position:bottom_right_-10.625rem] bg-no-repeat px-8 
        md:h-[18.75rem] md:bg-[position:bottom_right_-10rem] md:px-0
        xl:flex-row xl:justify-between xl:bg-[position:bottom_right_-10.1875rem] xl:px-[10.3125rem]`}
      >
        <h3
          className="
          max-w-[28.5625rem] text-center font-monospace text-32 font-bold text-white
          md:text-48
          xl:max-w-[25.9375rem] xl:text-left"
        >
          Sign up and Scoot off today
        </h3>
        <div
          className="
          flex flex-wrap justify-center gap-3
          xl:gap-[1.125rem]"
        >
          <a className="" href="https://www.apple.com/en/app-store/">
            <img
              className="h-10 w-auto xl:h-14"
              src={AppStoreIcon}
              alt="Available on the AppStore"
              target="_blank"
            />
          </a>
          <a className="" href="https://play.google.com/store/apps">
            <img
              className="h-10 w-auto xl:h-14"
              src={GooglePlayIcon}
              alt="Get it on GooglePlay"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

Download.propTypes = {
  className: PropTypes.string,
};

Download.defaultProps = {
  className: "",
};

export default Download;
