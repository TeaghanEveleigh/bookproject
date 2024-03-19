import React from "react";
import "./Dashboard.css";
import Navbar from "../navigation/Navbar";
import Library from "./Library";
import Shelf from "./Shelf";

const renderUserLibraries = (isDarkMode) => {
    return (
      <div style={{position : "relative" }}>
        
        <Shelf isDarkMode={isDarkMode} />
        
      </div>
    );
  }

function Dashboard({ isDarkMode }) {
    const userLoggedIn = true; // Assume the user is logged in for demonstration
  // For demonstration, you should implement your logic for dark mode
    // For demonstration, you should implement your logic for dark mode
    // Toggle dark mode class on body element
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    return (
      <div className="Dash">
        <Navbar isDarkMode = {isDarkMode}/>
        {renderUserLibraries(isDarkMode)}
   
      </div>
    );
    }
    export default Dashboard;