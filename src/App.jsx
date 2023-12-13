import './App.css'
import Nav from "./components/Nav/Nav"
import Genre from './components/genre/Genre'
import Inofrmation from './components/movieinformation/Inofrmation'
import Movies from './components/movies/Movies'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main >

      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/genre' element={<Genre/>}/>
          <Route path='/movie/:id' element={<Inofrmation/>}/>
        </Routes>
      </Router>
    </main>
  )
} 

export default App
