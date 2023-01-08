// import {Link} from 'react-router-dom'
import React from 'react'
import { FaSearch } from 'react-icons/fa'


function Navbar() {  

  return (
    <nav className='navbar'>
      <label htmlFor='search__toggle'>
          <FaSearch className='search-icon' />
        </label>
    </nav>
  )
}

export default Navbar
