import React, { useEffect } from 'react'


export default function Trending({gameList}) {
    return (
    <div className='mt-5'>
        <h2 className='font-bold text-xl dark:text-white'>Trending Games</h2>    
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {gameList.map((item,index)=>index<4 &&(
                <div className='bg-[#76a8f75e] rounded-lg 
                group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                    <img src={item.background_image} 
                    className='h-[270px] rounded-t-lg object-cover'/>
                    <h2 className='dark:text-white text-lg font-bold p-2'>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}
