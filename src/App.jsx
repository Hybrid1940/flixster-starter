import { useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import Search from './Search'
import Organization from './Search'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Flixter!!!</h1>
        <Organization />
        <MovieList />
      </header>
      
    </div>
  )
}

export default App
