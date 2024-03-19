import React from 'react';
import './Shelf.css'; // Import the CSS file
import BookCard from '../Cards/BookCard';
import HoverableLink from '../navigation/HoverableLink'; // Import the HoverableLink component

function Shelf(props) {
  return (
    <div className="shelf-container">
      {/* Card container */}
      <h1>To read</h1>
      
      <div className="card-container">
        {/* Render BookCard components */}
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      {/* Shelf */}
      <div className="shelf"></div>
      {/* Show more button */}
      <div className="show-more">
        <HoverableLink to="/discover" text="Show More" prefersDark={props.isDarkMode} />
      </div>
    </div>
  );
}

export default Shelf;
