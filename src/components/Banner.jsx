import React, { useEffect } from 'react'

export default function Banner({gameBanner}) {
    useEffect(()=>{
        
    },[])

    return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-700 to-transparent w-full'>
            <h2 className='text-xl text-white font-bold py-2'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 py-1 rounded-l'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} className='md:h-[500px] w-full object-cover rounded-xl'/>
    </div>
  )
}
