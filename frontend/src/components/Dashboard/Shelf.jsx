import React, { useRef, useEffect, useState } from 'react'
import './Shelf.css' // Import the CSS file
import BookCard from "../Cards/BookCard"
import HoverableLink from '../navigation/HoverableLink' // Import the HoverableLink component

function Shelf(props) {
  const shelfRef = useRef(null)
  const [numOfBooks, setNumOfBooks] = useState(0)
  const booksCovers = [
    "https://cdn.kobo.com/book-images/0f91e93b-a8b1-41c7-8e3a-400600e1ba75/353/569/90/False/the-hero-of-ages.jpg",
    "https://cdn.kobo.com/book-images/e6180d69-119f-42f8-9b4c-7898eb17c5b2/1200/1200/False/the-name-of-the-wind.jpg",
    "https://i.pinimg.com/originals/90/fb/72/90fb723050fa0685b812ac88c3abea79.jpg",
    "https://d3fa68hw0m2vcc.cloudfront.net/29f/175260472.jpeg",
    "https://d3fa68hw0m2vcc.cloudfront.net/076/240719062.jpeg"
   ];
   
  useEffect(() => {
    // Function to calculate the number of books based on screen width
    const calculateNumOfBooks = () => {
      const screenWidth = window.innerWidth
      let booksToShow = 5 // Default number of books to show

      if (screenWidth < 768) {
        booksToShow = 1
      } else if (screenWidth < 992) {
        booksToShow = 2
      } else if (screenWidth < 1200) {
        booksToShow = 3
      } else if (screenWidth < 1600) {
        booksToShow = 4
      }

      setNumOfBooks(booksToShow)
    }

    // Calculate initial number of books
    calculateNumOfBooks()

    // Listen for window resize event and recalculate the number of books
    window.addEventListener('resize', calculateNumOfBooks)

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', calculateNumOfBooks)
    }
  }, [])

  return (
    <div className={props.isDarkMode? "shelf-container-dark":"shelf-container-light"}>
      {/* Card container */}
      <h1 className={props.isDarkMode? "title-darkmode":"title-lightmode"}>{props.title}</h1>

      <div className='card-container'>
        {/* Render BookCard components */}
        {Array.from({ length: numOfBooks }).map((_, index) => (
          <BookCard
            key={index}
            cover={props.covers[index]}isDarkmode={props.isDarkMode}
          />
        ))}
      </div>
      {/* Shelf */}
      <div className={props.isDarkMode? "shelf-dark":"shelf-light"} ref={shelfRef}></div>
      {/* Show more button */}
      <div className={props.isDarkMode? "showmore-dark":"showmore-light"} >
        <HoverableLink
          fontWeight='bold'
          fontSize='30px'
          color={props.isDarkMode ? 'var(--dark-color-three)' : 'white'}
          to='/discover'
          text='Show More'
          prefersDark={props.isDarkMode}
          zIndex={100}
        />
      </div>
      <div className={props.isDarkMode? "shelf-rectangle-dark":"shelf-rectangle-light"}></div>
    </div>
  )
}

export default Shelf
