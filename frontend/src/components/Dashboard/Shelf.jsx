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
        <BookCard cover="https://th.bing.com/th/id/R.c88063c5daf45c328254380a94629678?rik=Q95WE98ht2pV7g&riu=http%3a%2f%2faidanmoher.com%2fblog%2fwp-content%2fuploads%2f2011%2f01%2fthe-mistborn-trilogy-by-brandon-sanderson-ebook.jpeg&ehk=bCUC7zUQ3I8i5ZBnzCi6AAAgIuDpLCboko%2btyRNYVKU%3d&risl=&pid=ImgRaw&r=0" />
        <BookCard cover="https://th.bing.com/th/id/R.0ee14b28f5c67a33b2def17dfd280696?rik=A8MlILWrgbxcyg&pid=ImgRaw&r=0"/>
        <BookCard cover="https://cdn11.bigcommerce.com/s-gibnfyxosi/images/stencil/1920w/products/154740/156431/51eq24cRtRL__98083.1615576774.jpg?c=1"/>
        <BookCard cover="https://th.bing.com/th/id/OIP.3TCv89mXp3Jg4Y9CA--flAAAAA?rs=1&pid=ImgDetMain"/>
        <BookCard cover="https://hachette.imgix.net/books/9781409165002.jpg?auto=compress,format"/>
     
      </div>
      {/* Shelf */}
      <div className="shelf"></div>
      {/* Show more button */}
      <div className="show-more">
        <HoverableLink fontWeight = "bold" fontSize="20px" color="black" to="/discover" text="Show More" prefersDark={props.isDarkMode} />
      </div>
    </div>
  );
}

export default Shelf;
