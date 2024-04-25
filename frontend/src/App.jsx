import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/LoginPage/Login';
import ShelfView from './components/ShelfView/ShelfView';

function App() {
  // State variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(true); // For demonstration, you should implement your logic for dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log(isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <ShelfView isDarkMode={isDarkMode} titleOfShelf={"Results of: Harry Potter"} />
      <button className={isDarkMode?"dark-mode-toggle-dark":"dark-mode-toggle-light"} onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;
