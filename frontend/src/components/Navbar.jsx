import PropTypes from "prop-types";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Navbar({ isDarkTheme, setIsDarkTheme }) {
  const navigate = useNavigate();
  const match = useLocation();
  const handleToggleDarkTheme = () => {
    setIsDarkTheme((theme) => !theme);
  };
  return (
    <div className="nav-container h-14 shadow-md md:px-12 px-6 py-2 overflow-hidden dark:shadow-[#1e1d1d] dark:shadow-md sticky top-0 z-[50] backdrop-blur-md bg-opacity-25">
      <div className="navbar-box flex align-middle content-center justify-between">
        <button onClick={() => navigate("/")} className="logo-container">
          <svg
            fill={isDarkTheme ? "#e5e7eb" : "#0f172a"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="dashboard"
            className={[
              "w-10 h-10 max-ssm:w-8 max-ssm:h-8 stroke-0",
              isDarkTheme ? "fill-gray-300 stroke-none  " : "fill-gray-400",
            ]}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect x="2" y="2" width="9" height="11" rx="2"></rect>
              <rect x="13" y="2" width="9" height="7" rx="2"></rect>
              <rect x="2" y="15" width="9" height="7" rx="2"></rect>
              <rect x="13" y="11" width="9" height="11" rx="2"></rect>
            </g>
          </svg>
        </button>
        <div className="trailing-container flex gap-x-5 place-items-center">
          <button
            onClick={() => navigate("/")}
            className={[
              match.pathname == "/dashboard"
                ? "hidden"
                : "flex place-items-center text-center",
            ]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              className="w-7 h-7 home dark:stroke-gray-300 dark:hover:stroke-gray-100 transition-all stroke-gray-700 hover:stroke-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
          <button onClick={handleToggleDarkTheme} className="theme-logo w-fit">
            {isDarkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="sun-icon w-7 h-7 stroke-2 fill-gray-300 hover:fill-gray-100 stroke-gray-300 hover:stroke-gray-100 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="moon w-7 h-7 hover:fill-slate-900 fill-slate-800 transition-all stroke-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
          <div className="button-container"></div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
};

export default Navbar;
