import React from 'react';
import './bookCard.css';
import HoverableLink from '../navigation/HoverableLink' // Import the HoverableLink component
function BookCard({cover,isDarkMode}) {
  return (
    <div className={isDarkMode? "book-card-dark":"book-card-light"}>
      <div className="book-cover">
        <div className="cover-image" style={{ 
          backgroundImage: "url('" + cover+ "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}><p className='title'><HoverableLink
          fontWeight='bold'
          fontSize='30px'
          color={isDarkMode ? 'var(--dark-color-three)' : 'white'}
          to='/discover'
          text='View Book'
          prefersDark={isDarkMode}
          zIndex={100}
        /></p></div>
        
      </div>
    </div>
  );
}

export default BookCard;
