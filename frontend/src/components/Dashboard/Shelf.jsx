import React, { useRef, useEffect, useState } from 'react';
import './Shelf.css'; // Import the CSS file
import BookCard from '../Cards/BookCard';
import HoverableLink from '../navigation/HoverableLink'; // Import the HoverableLink component

function Shelf(props) {
  const shelfRef = useRef(null);
  const [numOfBooks, setNumOfBooks] = useState(0);

  useEffect(() => {
    // Function to calculate the number of books based on screen width
    const calculateNumOfBooks = () => {
      const screenWidth = window.innerWidth;
      let booksToShow = 5; // Default number of books to show

      if (screenWidth < 768) {
        booksToShow = 1;
      } else if (screenWidth < 992) {
        booksToShow = 2;
      } else if (screenWidth < 1200) {
        booksToShow = 3;
      } else if (screenWidth < 1600) {
        booksToShow = 4;
      }

      setNumOfBooks(booksToShow);
    };

    // Calculate initial number of books
    calculateNumOfBooks();

    // Listen for window resize event and recalculate the number of books
    window.addEventListener('resize', calculateNumOfBooks);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', calculateNumOfBooks);
    };
  }, []);

  return (
    <div className="shelf-container">
      {/* Card container */}
      <h1 className="title">{props.title}</h1>
      
      <div className="card-container">
        {/* Render BookCard components */}
        {Array.from({ length: numOfBooks }).map((_, index) => (
          <BookCard 
            key={index} 
            cover={`https://picsum.photos/200/300?random=${index}`} 
          />
        ))}
      </div>
      {/* Shelf */}
      <div className="shelf" ref={shelfRef}></div>
      {/* Show more button */}
      <div className="show-more">
        <HoverableLink fontWeight="bold" fontSize="20px" color="black" to="/discover" text="Show More" prefersDark={props.isDarkMode} />
      </div>
    </div>
  );
}

export default Shelf;
