import React from "react";
import Book from "./Book";
const BookList = ({ name, books, onUpdateShelf }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={onUpdateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BookList;
