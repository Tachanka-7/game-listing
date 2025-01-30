import React, { useEffect } from 'react'

export default function GamesByGenreId(gameList) {
  useEffect(()=>{
    console.log("gameeeeeeeeeee",gameList)
  },[])    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {/* {gameList.map((item)=>(
      <div className='bg-[#76a8f75e] p-2 rounded-lg'>
        <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
          <h2>{item.name} <span>{item.metacritic}</span></h2>
          <h2>**{item.rating}***{item.reviews_count}****{item.suggestions_count}</h2>

      </div>
      ))} */}
    </div>
  )
}
