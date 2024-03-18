// ProfileDropdown.js
import React, { useState } from "react";
import "./ProfileDropdown.css";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-toggle" onClick={handleToggle}>
        <span>Your Profile</span>
        <i className={`fas fa-caret-${isOpen ? "up" : "down"}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div>Profile</div>
          <div>Preferences</div>
          <div>About</div>
          <div>Logout</div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
