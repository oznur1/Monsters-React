
import React from 'react'
import "./search-box.css"

const SearchBox=({ onChangeHandler, className, placeholder })=> (   
 
    <div>
      <input 
       placeholder={placeholder}
       className={`search-box ${className}`}
       type='search'
       onChange={onChangeHandler} />
    </div>
  )

export default SearchBox;




