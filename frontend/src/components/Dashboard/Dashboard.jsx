import React from "react";
import "./Dashboard.css";
import Navbar from "../navigation/Navbar";
import Library from "../Library/Library";

const renderUserLibraries = () => {
    return (
      <div style={{position : "relative" }}>
        <h1 >Teaghan's Library</h1>
        <p>Here are all the libraries you have access to</p>
      </div>
    );
  }
  
function Dashboard({ isDarkMode }) {
    const userLoggedIn = true; // Assume the user is logged in for demonstration
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
      <div className="App">
        <Navbar isDarkMode = {isDarkMode}/>
        {renderUserLibraries()}
      </div>
    );
    }