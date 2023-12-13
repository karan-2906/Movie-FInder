import React from 'react'
import Movie2 from '../movie/Movie2'

const Movielist = ({ movies }) => {
  return (
    <div className=' h-auto p-1 gap-5 flex flex-wrap justify-center items-center '>
      {movies?.results?.map((movie, index) => (
          <Movie2 key={index} index={index} movie={movie} />
      ))
      }
    </div>
  )
}

export default Movielist