import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage";
import BookShelfList from "./BookShelfList";
import SearchButton from "./SearchButton";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <BookShelfList />
              <SearchButton />
            </div>
          )}
        />
        <Route exact path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;
