import React from 'react'

function SearchForm ({query,onUpdateQuery}) {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={onUpdateQuery}
        />
      </div>
    )
  
}

export default SearchForm;