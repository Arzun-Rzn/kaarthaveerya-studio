import React from "react";
import "../styles/books.css";

const books = [
  {
    title: "Whispers of the Forest",
    description: "A collection of stories narrated by trees and wise elders of the tribe.",
  },
  {
    title: "The Silent Watcher",
    description: "The journey of a tribal boy guided by ancient spirits and nature.",
  },
  {
    title: "Moss & Moonlight",
    description: "Tales of divine creatures, myths, and dreams told around a fire.",
  },
];

const Books = () => {
  return (
    <main className="books-container">
      <h2>My Books</h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </div>

         {/* <div className="store-button-container">
            <Link to="/artstore" className="store-button">Visit Art Store</Link>
        </div> 
        */}
    </main>
    
  );
};

export default Books;
