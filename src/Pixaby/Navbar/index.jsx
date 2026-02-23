import React, { useState } from 'react'
import './index.css'
const index = ({ setSearch, setCurrentPage, handleSearch }) => {
  const [inputValue, setInputValue] = useState('')
  
  const handleSearchClick = () => {
    handleSearch(inputValue)
  }
  
  return (
    <div>
       <nav className='container'>
        <div className='left'>
          <h1>Image Pixaby</h1>
        </div>

        <div className='search-wrapper'>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
            placeholder='Search Images...'
          />
        <button onClick={handleSearchClick}>Search</button>
        </div>
      </nav>
    </div>
  )
}

export default index
