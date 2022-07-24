import React from "react";
import { FooterLogo } from "/src/common/components/Logo";
import LinkItem from "./LinkItem";
import SocialIcon from "./SocialIcon";

import facebookIcon from "/src/assets/icons/facebook.svg";
import twitterIcon from "/src/assets/icons/twitter.svg";
import instagramIcon from "/src/assets/icons/instagram.svg";

function Footer() {
  return (
    <footer
      className="
      min-h-[27.375rem] bg-darker-navy
      md:flex md:min-h-[6rem] md:items-center"
    >
      <div
        className="
        mx-auto min-h-[17.875rem] w-[7.5rem] pt-16
        md:flex md:min-h-max md:w-full md:pr-10 md:pt-0 md:pl-[2.4375rem]
        xl:max-w-[90rem] xl:pl-[10.5rem] xl:pr-[10.3125rem]"
      >
        <FooterLogo
          className="
          mx-auto mb-[2.5625rem]
          md:m-0 md:mr-[3.6875rem] md:mt-[0.1875rem]"
        />
        <ul
          className="
          mb-[5.3125rem] flex flex-col gap-4 text-center font-monospace text-15 font-bold text-dim-grey
          md:mb-0 md:mt-[0.1875rem] md:flex-row md:gap-8"
        >
          <LinkItem to="/about">About</LinkItem>
          <LinkItem to="/locations">Location</LinkItem>
          <LinkItem to="/careers">Careers</LinkItem>
        </ul>
        <ul
          className="
          flex items-center gap-6
          md:ml-auto"
        >
          <SocialIcon
            href="https://www.facebook.com/"
            src={facebookIcon}
            alt="Our facebook"
          />
          <SocialIcon
            href="https://twitter.com/"
            src={twitterIcon}
            alt="Our Twitter"
          />
          <SocialIcon
            href="https://www.instagram.com/"
            src={instagramIcon}
            alt="Our Instagram"
          />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
