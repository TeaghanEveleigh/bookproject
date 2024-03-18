import React from "react";
import "./Navbar.css";
import HoverableLink from "./HoverableLink";
import ProfileDropdown from "./ProfileDropDown";

function Navbar({ isDarkMode }) {
  const userLoggedIn = true; // Assume the user is logged in for demonstration

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {userLoggedIn ? (
        <>
          <HoverableLink to="/backend/index.js" text="My Library" prefersDark={isDarkMode} />
          <HoverableLink to="/discover" text="Discover" prefersDark={isDarkMode} />
        </>
      ) : (
        <>
          <HoverableLink to="/login" text="Login" prefersDark={isDarkMode} />
          <HoverableLink to="/signup" text="Signup" prefersDark={isDarkMode} />
        </>
      )}

      <HoverableLink to="/help" text="Help" prefersDark={isDarkMode} />
      <HoverableLink to="/about" text="About" prefersDark={isDarkMode} />
      {userLoggedIn && (
        <HoverableLink to="/logout" text="Logout" prefersDark={isDarkMode} />
      )}
    </div>
  );
}

export default Navbar;
