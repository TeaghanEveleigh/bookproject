import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ loggedIn, darkmode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav>
        <label htmlFor="touch">
          <span onClick={toggleDropdown}>
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M4 18L20 18"
                  stroke={darkmode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke={darkmode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke={darkmode ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

          </span>
        </label>

        <input type="checkbox" id="touch" role="button" />

        {dropdownOpen && (
          <ul className="slide">
            {loggedIn ? (
              <React.Fragment>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
              </React.Fragment>
            ) : (
              <li>
                <a href="#">Fallback Link</a>
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Dropdown;
