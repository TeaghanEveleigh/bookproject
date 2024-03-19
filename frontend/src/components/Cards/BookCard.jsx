import React from 'react';
import './bookCard.css';

function BookCard(props) {
  return (
    <div className="book-card">
      <div className="book-cover">
        <div className="cover-image" style={{ 
          backgroundImage: "url('" + props.cover + "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}></div>
        <div><p className='title'>the wise mans fear</p></div>
      </div>
    </div>
  );
}

export default BookCard;
