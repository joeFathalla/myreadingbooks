import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";
class SearchPage extends Component {
  state = {
    query: "",
    error: false,
    books: [],
  };

  onChangeHandler = (event) => {
    this.setState({ query: event.target.value, books: [] });
    this.onSearch(event.target.value);
  };

  onSearch = (query) => {
    BooksAPI.search(query, 20)
      .then((searchBooks) => {
        if (searchBooks.length > 0) {
          BooksAPI.getAll().then((myBooks) => {
            let finalBooks = [];
            searchBooks.map((searchBook) => {
              myBooks.map((myBook) => {
                if (myBook.id === searchBook.id) {
                  searchBook.shelf = myBook.shelf;
                }
              });
              if (!searchBook.shelf) {
                searchBook.shelf = "none";
              }
              finalBooks.push(searchBook);
            });
            console.log(finalBooks);
            this.setState({ books: finalBooks });
          });
        }
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  UpdateShelfHandler = (id, shelf) => {
    BooksAPI.update(id, shelf).then(() => {
      this.onSearch(this.state.query);
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={this.UpdateShelfHandler} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
