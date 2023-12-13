import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const Topbar = () => {
    
    const genre = [
        "genre1",
        "genre2",
        "genre3",
       " genre4",
        "genre5",
        "genre6",
        "genre7",
        "genre8",
        "genre9",
        "genre10",
        "genre11",
    ]
  return (
    <div className='text-white flex gap-4 py-3 px-3 overflow-x-auto'>
        {
        genre.map((item, i) => {
            <button className='px-4 py-2 border rounded-lg flex justify-center items-center gap-2'>
                <AiOutlineStar/>
                <p className=''>{item}</p>
            </button>
        })
    }
    </div>
  )
}

export default Topbar