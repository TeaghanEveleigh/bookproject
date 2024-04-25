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
      setMobile(screenWidth > 1150);
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
                text="My Library "
                prefersDark={isDarkMode}
                svg = {<svg className="svg-class" height="30px" width="30px" fill="var(--dark-color-three)"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>}
              />
              <HoverableLink
                fontSize="30px"
                to="/discover"
                text="Discover"
                prefersDark={isDarkMode}
                svg={<svg className="svg-class" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 512 512"><path fill="var(--dark-color-three)" d="M149.688 85.625c-1.234.005-2.465.033-3.72.063-33.913.806-75.48 10.704-127.25 33.718V362.78c60.77-28.82 106.718-37.067 144.22-33.092 33.502 3.55 59.685 16.66 83.562 31.187v-242.97c-23.217-17.744-50.195-30.04-85.97-32-3.52-.192-7.142-.296-10.843-.28zm211.968 0c-3.7-.016-7.322.088-10.844.28-35.773 1.96-62.75 14.256-85.968 32v242.97c23.876-14.527 50.06-27.637 83.562-31.188 37.502-3.974 83.45 4.272 144.22 33.094V119.407c-51.77-23.014-93.337-32.912-127.25-33.72-1.255-.028-2.486-.056-3.72-.06zm5.72 261.78c-1.038-.002-2.074.017-3.095.033-4.808.075-9.43.37-13.905.843-33.932 3.597-59.603 17.976-85.53 34.44v.28c-6.554-1.99-13.02-2.37-19.408-.97-25.566-16.177-51.003-30.202-84.468-33.75-5.595-.592-11.44-.883-17.564-.842-32.04.213-71.833 9.778-124.687 35.937v42.53c60.77-28.823 106.714-37.067 144.218-33.092 18.545 1.965 34.837 6.845 49.75 13.28-4.682 6.064-9.308 13.268-13.875 21.688h117.156c-5.93-8.22-11.798-15.414-17.626-21.56 14.996-6.503 31.39-11.43 50.062-13.408 37.503-3.974 83.448 4.27 144.22 33.094v-42.53c-53.16-26.31-93.115-35.863-125.25-35.97z"/></svg>}
              />
              <input className="search-bar" type="text" placeholder="Search Your Shelves"></input>
            </>
          ) : (
            
            <><HoverableLink
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
          /> <div className="logins"><HoverableLink
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
              </div>
              
            </>
          )}
          {/* <HoverableLink
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
          /> */}
          {userLoggedIn && (
            <div className="logout"><HoverableLink
              fontSize="30px"
              to="/logout"
              text="Logout"
              svg={<svg className="svg-class" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24" fill="none">
<path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="var(--dark-color-three)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="var(--dark-color-three)" stroke-width="1.5" stroke-linecap="round"/>
</svg>}
              prefersDark={isDarkMode}
            /></div>

            
          )}
          
        </div>
        
      ) : <Dropdown loggedIn={userLoggedIn} isdarkmode = {isDarkMode} />}
    </div>
  );
}

export default Navbar;
