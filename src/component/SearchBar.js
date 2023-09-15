import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
function SearchBar() {
  return (
    <>
    <div id='InputBase'>
      <InputBase className='searchprod' placeholder='Search for pdoducts, brands and more'/> 
      <SearchIcon className='searchIcon'/>
    </div>
    <div>
       
    </div>
    </>
  )
}

export default SearchBar
