// BookList.js
import React from 'react';
import './BookList.css';
import HoverableLink from '../navigation/HoverableLink';

const BookList = ({ books , isDarkMode}) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div className={isDarkMode? "book darkBook": "book lightBook"} key={index}>
          <img className='cover' src={book.cover} alt="Book Cover" />
          <div className="description">
     <h1 className="titleOfBook">{book.title}</h1> 
     <hr></hr>
     <span className="author">{book.author}</span>
     <div className={isDarkMode? "show showmore-dark":"show showmore-light"} >
        <HoverableLink
          fontWeight='bold'
          fontSize='20px'
          color={isDarkMode ? 'var(--dark-color-four)' : 'white'}
          to='/discover'
          text='Show More'
          prefersDark={isDarkMode}
          zIndex={0}
        />
        </div>
 </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
