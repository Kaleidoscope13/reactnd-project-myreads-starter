import React from 'react'
import Shelf from './Shelf';

function Shelves({totalBooks, changeShelf}) {
  let allBooks = totalBooks;
  let currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
  let wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
  let read = allBooks.filter(book => book.shelf === "read");
  return (
    <div className="list-books-content">
      <div>
        <Shelf books={currentlyReading} title={"Currently Reading"} changeShelf={changeShelf} />
        <Shelf books={wantToRead} title={"Want to Read"} changeShelf={changeShelf} />
        <Shelf books={read} title={"Read"} changeShelf={changeShelf} />
      </div>
    </div>
  )
}

export default Shelves;