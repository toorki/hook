import './App.css';
import { Data } from './Data';
import { useState } from 'react';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList'

function App() {
const [movie, setMovie] = useState(Data)
const [search, setSearch] = useState("")
const [rate,setRate] = useState(0)
const handleSearch=(e)=>{
  setSearch(e.target.value)
  }
  const handleRate=(e)=>{
    setRate(e)
  
  }
  
  
  const add=(newMovie)=>{
    setMovie([...movie,newMovie])
    
  }
  return (
    <div className="App">
    <Filter handleSearch={handleSearch} handleRate={handleRate}  />
    <MovieList movies={movie} search={search} rate={rate}  />
    <AddMovie add={add} />
    </div>
  );
}

export default App;
