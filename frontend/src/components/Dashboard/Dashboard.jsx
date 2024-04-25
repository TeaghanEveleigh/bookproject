import React from "react";
import "./Dashboard.css";
import Navbar from "../navigation/Navbar";
import Shelf from "./Shelf";
import PlusButton from "./PlusButton";



const renderUserLibraries = (isDarkMode,booksCovers) => {
    return (
      <div style={{position : "relative" }}>
        
        <Shelf title="To Read"isDarkMode={isDarkMode} covers={booksCovers}/>
        <Shelf title="Recomended"isDarkMode={isDarkMode} covers={booksCovers}/>
        <Shelf title="Reading"isDarkMode={isDarkMode} covers={booksCovers}/>
      </div>
    );
  }

function Dashboard({ isDarkMode }) {
  const booksCovers = [
    "https://cdn.kobo.com/book-images/0f91e93b-a8b1-41c7-8e3a-400600e1ba75/353/569/90/False/the-hero-of-ages.jpg",
    "https://cdn.kobo.com/book-images/e6180d69-119f-42f8-9b4c-7898eb17c5b2/1200/1200/False/the-name-of-the-wind.jpg",
    "https://i.pinimg.com/originals/90/fb/72/90fb723050fa0685b812ac88c3abea79.jpg",
    "https://d3fa68hw0m2vcc.cloudfront.net/29f/175260472.jpeg",
    "https://d3fa68hw0m2vcc.cloudfront.net/076/240719062.jpeg"
   ];
    const userLoggedIn = false; // Assume the user is logged in for demonstration
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
        <div className="content-wrapper"><div className="Dash">
       
        <Navbar isDarkMode = {isDarkMode}/>
        {renderUserLibraries(isDarkMode,booksCovers)}
   
      </div></div>
      
    );
    }
    export default Dashboard;