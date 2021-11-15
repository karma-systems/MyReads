import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";
import propTypes from 'prop-types'

const SearchPage = (props)=>{
const {books, updateShelf} = props;
     const [query, setQuery] = useState('')
     const [searchResult, setSearchResult] = useState([])

     const updateSearchQuery = (query)=>{
        
        setQuery(query);
        updateSearchResult(query);        
     }
     const updateSearchResult = (query)=>{
         if(query){
         BooksAPI.search(query).then((results) =>{
             results.error ? setSearchResult([]):setSearchResult(results)
         })
         }
        else{
            setSearchResult([])
        }
     }

     return(
        <div className="search-books">

        <div className="search-books-bar">

          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => updateSearchQuery(e.target.value)}
            />
          </div>

        </div>


        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchResult.map(result => {
                let shelfName = "none";

                books.map(book => (
                  book.id === result.id ?
                  shelfName = book.shelf :
                  ''
                ));

                return (
                <li key={result.id}>
                <Book
                book={result}
                updateShelf={updateShelf}
                shelf={shelfName}
                />

                </li>
              );
              })
            }
          </ol>
        </div>
      </div>
    
        
     );

}
SearchPage.propTypes = {
  books: propTypes.array.isRequired,
  updateShelf: propTypes.func.isRequired,
}

export default SearchPage