import React, { useEffect, useState } from "react";
import "./Navbar.css";
import HoverableLink from "./HoverableLink";

import Dropdown from "./Dropdown";

function Navbar({ isDarkMode }) {
  const userLoggedIn = true;
  const [mobile, setMobile] = useState(window.innerWidth < 800 ? true : false);

  useEffect(() => {
    const calculateDropdown = () => {
      const screenWidth = window.innerWidth;
      setMobile(screenWidth > 800);
    };

    calculateDropdown();
    window.addEventListener("resize", calculateDropdown);

    return () => {
      window.removeEventListener("resize", calculateDropdown);
    };
  }, []);

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {mobile ? (
        <div id="links" className="links-content">
          {userLoggedIn ? (
            <>
              <HoverableLink
                fontSize="30px"
                to="/backend/index.js"
                text="My Library"
                prefersDark={isDarkMode}
              />
              <HoverableLink
                fontSize="30px"
                to="/discover"
                text="discover"
                prefersDark={isDarkMode}
              />
            </>
          ) : (
            <>
              <HoverableLink
                fontSize="30px"
                to="/login"
                text="Login"
                prefersDark={isDarkMode}
              />
              <HoverableLink
                fontSize="30px"
                to="/signup"
                text="Signup"
                prefersDark={isDarkMode}
              />
            </>
          )}
          <HoverableLink
            fontSize="30px"
            to="/help"
            text="Help"
            prefersDark={isDarkMode}
          />
          <HoverableLink
            fontSize="30px"
            to="/about"
            text="About"
            prefersDark={isDarkMode}
          />
          {userLoggedIn && (
            <HoverableLink
              fontSize="30px"
              to="/logout"
              text="Logout"
              prefersDark={isDarkMode}
            />
          )}
        </div>
      ) : <Dropdown loggedIn={userLoggedIn} isdarkmode = {isDarkMode} />}
    </div>
  );
}

export default Navbar;
