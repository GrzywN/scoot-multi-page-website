import GetScootinButton from "../../../../common/components/GetScootinButton";
import rightArrow from "../../../../assets/patterns/right-arrow.svg";
import whiteCircles from "../../../../assets/patterns/white-circles.svg";
import line from "../../../../assets/patterns/line.svg";

function Hero() {
  return (
    <div
      className="
      relative h-[40.625rem] overflow-hidden bg-home-hero-mobile bg-cover bg-center px-8 pt-[7.1875rem]
      md:bg-home-hero-tablet md:pt-[8.5625rem]
      lg:bg-home-hero-desktop lg:pt-[9.5625rem] lg:pl-[10.3125rem]"
    >
      <div
        className="
        flex flex-col items-center
        lg:items-start"
      >
        <h1
          className="
          mb-6 text-center font-monospace text-h3 leading-none text-white
          md:max-w-[35.8125rem] md:text-h1
          lg:mb-10 lg:text-left"
        >
          Scooter sharing made simple
        </h1>
        <p
          className="
          mb-[2.125rem] text-center font-sans-serif text-body text-white
          md:mb-8 md:max-w-[35.8125rem]
          lg:mb-10 lg:max-w-[25.3125rem] lg:translate-x-[5.9375rem] lg:text-left"
        >
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <GetScootinButton className="max-w-[11.25rem] lg:translate-x-[5.9375rem]" />
      </div>
      <img
        className="
        absolute bottom-[2.1563rem] left-[-15rem]
        md:left-[-7.9375rem]
        lg:left-[44.0625rem] lg:bottom-[9.5rem]"
        src={rightArrow}
        alt=""
      />
      <img
        className="
        hidden
        md:absolute md:right-[-1.9375rem] md:bottom-[2.8125rem] md:block md:h-[3.9375rem] md:w-[14.625rem]
        lg:-right-12
        lg:bottom-[10.3125rem]"
        src={whiteCircles}
        alt=""
      />
      <img
        className="
        hidden
        lg:absolute lg:bottom-[18rem] lg:left-0 lg:block"
        src={line}
        alt=""
      />
    </div>
  );
}

export default Hero;
