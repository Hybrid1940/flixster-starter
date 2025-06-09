import { useState } from 'react'
import './App.css'

const Organization = () => {
  return (
    <div style={{display:'flex', justifyContent:"center"}} className="Search">
      <form>
        <input type='text'></input>
        <button type='submit'>Search</button>
        <button type='submit'>Clear</button>
      </form>
      <select style={{marginLeft:"10px"}} name='sortOptions' id='sortOptions'>
        <option value="alphabetic">A-Z</option>
        <option value="alphabetic">Most Recent</option>
        <option value="alphabetic">votes</option>
      </select>
    </div>
  )
}

export default Organization 
