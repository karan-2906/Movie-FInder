import React from 'react'
import Pagination from '../Pagination/Pagination'
import Movielist from '../movielist/Movielist'
import { useGetPopularMoviesQuery } from '../../services/Api'


const Movies = () => {

  const { data, error, isFetching } = useGetPopularMoviesQuery()
  console.log(data)

  return (
    <section className='w-full h-auto p-6 flex flex-col justify-center item-center'>
      <Movielist movies={data}/>
      <Pagination/>
    </section>
  )
}

export default Movies