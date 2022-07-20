import CTA from "../../../../common/components/CTA";
import rightArrow from "../../../../assets/patterns/right-arrow.svg";
import whiteCircles from "../../../../assets/patterns/white-circles.svg";
import line from "../../../../assets/patterns/line.svg";

function Hero() {
  return (
    <div
      className="
      grid place-items-center overflow-hidden bg-home-hero-mobile bg-cover bg-center
      md:bg-home-hero-tablet 
      xl:bg-home-hero-desktop"
    >
      <div
        className="
        relative h-[40.625rem] w-full max-w-[90rem] px-8 pt-[7.1875rem] 
        md:pt-[8.5625rem]
        xl:pt-[9.5625rem] xl:pl-[10.3125rem]"
      >
        <div
          className="
          flex flex-col items-center
          xl:items-start"
        >
          <h1
            className="
            mb-6 max-w-[23.4375rem] text-center font-monospace text-h3 leading-none text-white
            md:max-w-[35.8125rem] md:text-h1
            xl:mb-10 xl:text-left"
          >
            Scooter sharing made simple
          </h1>
          <p
            className="
            mb-[2.125rem] text-center font-sans-serif text-body text-white
            md:mb-8 md:max-w-[35.8125rem]
            xl:mb-10 xl:max-w-[25.3125rem] xl:translate-x-[5.9375rem] xl:text-left 2xl:translate-x-0"
          >
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <CTA className="max-w-[11.25rem] xl:translate-x-[5.9375rem] 2xl:translate-x-0" />
        </div>
        <img
          className="
          absolute bottom-[2.1563rem] left-[-15rem]
          md:left-[-7.9375rem]
          xl:left-[44.0625rem] xl:bottom-[9.5rem]"
          src={rightArrow}
          alt=""
        />
        <img
          className="
          hidden
          md:absolute md:right-[-1.9375rem] md:bottom-[2.8125rem] md:block md:h-[3.9375rem] md:w-[14.625rem]
          xl:bottom-[10.3125rem] xl:left-[78.375rem]"
          src={whiteCircles}
          alt=""
        />
        <img
          className="
          hidden
          xl:absolute xl:bottom-[18rem] xl:left-0 xl:block
          2xl:hidden"
          src={line}
          alt=""
        />
        <img
          className="
          hidden
          xl:absolute xl:bottom-[18rem] xl:left-0 xl:block xl:-translate-x-full
          2xl:hidden"
          src={line}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
