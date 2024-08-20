// Discover.jsx
import React from 'react';
import { useFavorites } from '../../FavoriteContext'; // Adjust the path based on your file structure
import { useCarts } from '../../CartContext'; // Import useCarts here
import book1 from '../../Assets/book-1.jpg';
import book2 from '../../Assets/book-2.jpg';
import book3 from '../../Assets/book-3.jpg';
import book4 from '../../Assets/book-4.jpg';
import book5 from '../../Assets/book-5.jpg';
import book7 from '../../Assets/b00k-7.jpg';
import book8 from '../../Assets/book-8.jpg';
import book9 from '../../Assets/book-9.jpg';
import book10 from '../../Assets/book-10.jpg';
import book11 from '../../Assets/book-11.jpg';
import book12 from '../../Assets/book-12.jpg';
import book13 from '../../Assets/book-13.jpg';

const books = [
  { id: 1, src: book1, title: 'Book 1' },
  { id: 2, src: book2, title: 'Book 2' },
  { id: 3, src: book3, title: 'Book 3' },
  { id: 4, src: book4, title: 'Book 4' },
  { id: 5, src: book5, title: 'Book 5' },
  { id: 7, src: book7, title: 'Book 7' },
  { id: 8, src: book8, title: 'Book 8' },
  { id: 9, src: book9, title: 'Book 9' },
  { id: 10, src: book10, title: 'Book 10' },
  { id: 11, src: book11, title: 'Book 11' },
  { id: 12, src: book12, title: 'Book 12' },
  { id: 13, src: book13, title: 'Book 13' },
];

const Discover = () => {
  const { addToFavorites } = useFavorites();
  const { addToCarts } = useCarts();

  const handleFavoriteClick = (book) => {
    addToFavorites(book);
  };

  const handleCartClick = (book) => {
    addToCarts(book);
    alert('Added to cart');
  };

  return (
    <section className='featured' id='featured'>
      <h1 className='text-center mb-8 relative before:content-[""] before:absolute before:top-1/2 before:left-0 before:w-full before:h-[0.01rem] before:bg-[rgba(0,0,0,0.1)] before:-translate-y-1/2 before:z-[-1]'>
        <span className='text-3xl py-2 px-8 text-black bg-white border-gray-300'>Featured Books</span>
      </h1>
      <div className='featured-slider'>
        <div className='grid grid-cols-4 gap-2'>
          {books.map((book) => (
            <div key={book.id} className='w-[18rem] h-[30rem] my-8 relative overflow-hidden border border-gray-500 text-center hover:border-red-500'>
              <div className='transform -translate-y-full absolute inset-x-0 top-0 bg-white border-b border-gray-500 z-10 hover:transform translate-y-0'>
                <a
                  href='#'
                  className='fas fa-search text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'
                ></a>
                <a
                  href='#'
                  className='fas fa-heart text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'
                  onClick={() => handleFavoriteClick(book)}
                ></a>
                <a
                  href='#'
                  className='fas fa-eye text-black text-4xl py-4 px-6 hover:bg-red-700 hover:text-white'
                ></a>
              </div>
              <div className='p-4 bg-gradient-to-br from-gray-200 to-white'>
                <img src={book.src} className='h-80 w-72 max-h-full max-w-full object-cover' alt={book.title} />
              </div>
              <div className='bg-white p-0'>
                <h3 className='text-black text-xl'>{book.title}</h3>
                <div className='text-2xl text-black pt-0 pb-4'>
                  N1500<span className='text-xl line-through text-black'>N2000</span>
                </div>
                <a href='#' className='rounded-full text-white bg-red-700 px-4 py-3 justify-center text-[1.4rem]'
                onClick={() => handleCartClick(book)}
                >
                  add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
