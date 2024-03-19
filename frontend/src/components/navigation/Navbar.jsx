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
          <HoverableLink
            fontSize="30px"
            to="/backend/index.js"
           text="My Library" svg={<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffff" width="40px" height="40px" viewBox="0 0 256 256" id="Flat" position="relative" >
  <path d="M120,48v64a7.9954,7.9954,0,0,1-8,8H48a7.99539,7.99539,0,0,1-8-8V48a7.99539,7.99539,0,0,1,8-8h64A7.9954,7.9954,0,0,1,120,48Zm88-8H144a7.99539,7.99539,0,0,0-8,8v64a7.99539,7.99539,0,0,0,8,8h64a7.9954,7.9954,0,0,0,8-8V48A7.9954,7.9954,0,0,0,208,40Zm-96,96H48a7.99539,7.99539,0,0,0-8,8v64a7.99539,7.99539,0,0,0,8,8h64a7.9954,7.9954,0,0,0,8-8V144A7.9954,7.9954,0,0,0,112,136Zm96,0H144a7.99539,7.99539,0,0,0-8,8v64a7.99539,7.99539,0,0,0,8,8h64a7.9954,7.9954,0,0,0,8-8V144A7.9954,7.9954,0,0,0,208,136Z"/>
</svg>}
            prefersDark={isDarkMode}
          />
          <HoverableLink
            fontSize="30px"
            to="/discover"
            text="discover" svg={<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffffff" width="40px" height="40px" viewBox="0 0 256 256" id="Flat"><path xmlns="http://www.w3.org/2000/svg" d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>}
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
  );
}

export default Navbar;
