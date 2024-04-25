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
          <div onClick={toggleDropdown} className="menu-icon">
          {dropdownOpen ? <i className= {darkmode? "material-icons darklose" : "material-icons lightclose"} style={{ fontSize: '50px' }}>close</i>: <i className={darkmode? "material-icons darkmenu":"material-icons lightmenu"} style={{ fontSize: '50px' }}>menu</i>}
          </div>
          
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
