import React, { useState, useContext } from 'react'
import './index.css'
import { Theme } from '../ ../App'

const index = ({ setSearch, setCurrentPage, handleSearch }) => {
  const [inputValue, setInputValue] = useState('')
  
  const handleSearchClick = () => {
    handleSearch(inputValue)
  }

  const {theme, ChangeTheme} = useContext(Theme)
  
  return (
    <div>
       <nav className={`container ${theme}`}>
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
          <button onClick={ChangeTheme}> {theme} </button>
        </div>
      </nav>
    </div>
  )
}

export default index
