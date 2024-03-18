import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';

const renderUserLibraries = () => {
  return (
    <div style={{position : "relative" }}>
      <h1 >Teaghan's Library</h1>
      <p>Here are all the libraries you have access to</p>
    </div>
  );
}

function App() {
  // Assume you have a state variable to determine whether the app is in light or dark mode
  const isDarkMode = false; // For demonstration, you should implement your logic for dark mode
  
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

export default App;
