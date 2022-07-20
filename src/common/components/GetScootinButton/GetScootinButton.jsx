import PropTypes from "prop-types";

function GetScootinButton({ className }) {
  return (
    <a
      href="#download"
      className={`
        ${className}
        grid h-[3.3125rem] w-full place-items-center bg-yellow font-button text-button text-white
        sm:max-w-[11.25rem]`}
    >
      Get Scootin
    </a>
  );
}

GetScootinButton.propTypes = {
  className: PropTypes.string,
};

GetScootinButton.defaultProps = {
  className: "",
};

export default GetScootinButton;
