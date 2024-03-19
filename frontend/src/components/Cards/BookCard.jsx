import React from 'react';
import './bookCard.css';

function BookCard() {
  return (
    <div className="book">
     
      <div className="cover" style={{ 
        backgroundImage: "url('https://booksandbao.com/wp-content/uploads/2021/04/the-name-of-the-wind-audiobook-300x300.jpg')",
        backgroundSize: "cover", // Ensure the background image covers the entire container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat" // Prevent the background image from repeating
      }}>
      </div>
    </div>
  );
}

export default BookCard;
