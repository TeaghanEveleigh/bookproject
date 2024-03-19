import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  // State variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(true); // For demonstration, you should implement your logic for dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Dashboard isDarkMode={isDarkMode} />
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;
