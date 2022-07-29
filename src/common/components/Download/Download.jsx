import React from "react";
import PropTypes from "prop-types";
import DownloadButton from "./DownloadButton";
import AppStoreIcon from "/src/assets/icons/app-store-2.svg";
import GooglePlayIcon from "/src/assets/icons/google-play-2.svg";

function Download({ className }) {
  return (
    <section id="download" className="w-full bg-dark-navy">
      <div
        className={`${className} 
        mx-auto flex h-80 flex-col items-center justify-center gap-10 bg-semi-circles bg-[position:bottom_right_-10.625rem] bg-no-repeat px-8 
        md:h-[18.75rem] md:bg-[position:bottom_right_-10rem] md:px-0
        xl:max-w-[90rem] xl:flex-row xl:justify-between xl:bg-[position:bottom_right_-10.1875rem] xl:px-[10.3125rem]`}
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
          <DownloadButton
            src={AppStoreIcon}
            alt="Available on the AppStore"
            href="https://www.apple.com/en/app-store/"
          />
          <DownloadButton
            src={GooglePlayIcon}
            alt="Get it on Google Play"
            href="https://play.google.com/store/apps"
          />
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
