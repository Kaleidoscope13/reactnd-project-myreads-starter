import React, {useEffect, useState} from 'react'
// import React, {useEffect} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as  BooksAPI from './BooksAPI'

import SearchForBooks from './components/SearchForBooks';
import Shelves from './components/Shelves';

import Navbar from './components/Navbar';
import BtnSearch from './components/BtnSearch';


import { Link, Route } from 'react-router-dom';



export default function App() {
 const [state, setState] = useState({
    books: [],
  });

 const  updateSearchPageState = (state) => {
    setState({
      showSearchPage: state,
    });
  };
  useEffect(() => {
    BooksAPI.getAll().then((resp) => setState({ books: resp }))
  }, [])
  const changeTheBookShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
       book.shelf = shelf;
       setState((state) => ({
         books: state.books
           .filter((b) => b.id !== book.id)
           .concat([book]),
       }));
      })
    }
  };
  return (
    <div className="app">
    <Route path='/search' render={() =>(
      <SearchForBooks
      showSearchPage={updateSearchPageState}
      changeShelf={changeTheBookShelf}
      books={state.books}
     />
   )}
   />
    
    <div className="list-books">
      <Route exact  path='/' render={() => (
        <div>
       <Navbar />
       <Shelves
        totalBooks={state.books}
        changeShelf={changeTheBookShelf}
      />
      <Link to='/search'>
      <BtnSearch/>
      </Link>

       </div>
  )}
/>
</div>
</div>
  )
}
