import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";

class BookShelfList extends Component {
  state = {
    currentlyReadingShelf: [],
    wantToReadShelf: [],
    readShelf: [],
  };

  fetchAllBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState(() => ({
      currentlyReadingShelf: books.filter(
        (book) => book.shelf === "currentlyReading"
      ),
      wantToReadShelf: books.filter((book) => book.shelf === "wantToRead"),
      readShelf: books.filter((book) => book.shelf === "read"),
    }));
  };

  componentDidMount() {
    this.fetchAllBooks();
  }
  UpdateShelfHandler = (id, shelf) => {
    BooksAPI.update(id, shelf).then(() => {
      this.fetchAllBooks();
    });
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookList
              name="Currently Reading"
              books={this.state.currentlyReadingShelf}
              onUpdateShelf={this.UpdateShelfHandler}
            />
            <BookList
              name="Want To Read"
              books={this.state.wantToReadShelf}
              onUpdateShelf={this.UpdateShelfHandler}
            />
            <BookList
              name="Read"
              books={this.state.readShelf}
              onUpdateShelf={this.UpdateShelfHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelfList;
