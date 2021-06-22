import React from "react";

const Book = ({ book, onUpdateShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.smallThumbnail : ""
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf}
            onChange={(event) => onUpdateShelf(book, event.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option
              value="currentlyReading"
              disabled={book.shelf === "currentlyReading"}
            >
              Currently Reading
            </option>
            <option value="wantToRead" disabled={book.shelf === "wantToRead"}>
              Want to Read
            </option>
            <option value="read" disabled={book.shelf === "read"}>
              Read
            </option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors &&
          book.authors.map((author) => <span key={author}>{author}</span>)}
      </div>
    </div>
  );
};

export default Book;
