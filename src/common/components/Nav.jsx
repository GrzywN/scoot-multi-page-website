import PropTypes from "prop-types";

function Nav({ isMenuOpen }) {
  return (
    <nav
      className={`${
        isMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
      } 
      fixed top-16 bottom-0 left-0 z-50 flex w-full max-w-[16rem] origin-top-left flex-col 
        justify-between bg-dark-navy px-8 pb-6 pt-16 transition duration-500 ease-in-out 
      sm:static sm:max-w-none sm:scale-x-100 sm:flex-row sm:items-center sm:bg-white sm:p-0 sm:opacity-100`}
    >
      <ul
        className="
        grid gap-6 font-nav-list text-nav-list text-light-grey
        sm:flex sm:gap-8 sm:text-dim-grey"
      >
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/location">Location</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
      </ul>
      <a
        href="#download"
        className="
        grid h-[3.3125rem] w-full place-items-center bg-yellow font-button text-button text-white
        sm:max-w-[11.25rem]"
      >
        Get Scootin
      </a>
    </nav>
  );
}

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Nav;
