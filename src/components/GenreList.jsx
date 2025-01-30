import React, { useEffect, useState } from 'react'
import globalApi from '../services/globalApi'

export default function GenreList() {

    const [genreList,setGenreList] = useState([])
    const [activeIndex,setActiveIndex] =useState(0)

  useEffect(() =>{
    getGenreList();
  })
  
    const getGenreList=() =>{
    globalApi.getGenreList.then((resp)=>{
        setGenreList(resp.data.results)
    })
  }
    return (
    <div>
        <h2 className='text-3xl font-bold dark:text-white my-3'>Genre</h2>
        {genreList.map((item,index)=>(
            <div onClick={()=>{setActiveIndex(index)}} 
            className={`flex gap-5 items-center mb-2 cursor-pointer 
            hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group
            ${activeIndex==index?'bg-gray-300 dark:bg-gray-600':null}`}>
                <img src={item.image_background} 
                className={`w-[40px] h-[40px] object-cover rounded-lg 
                group-hover:scale-150 transition-all ease-out duration-300 ${activeIndex==index ? 'scale-150': null}`}/>
            <h3 className={`dark:text-white text-lg group-hover:font-bold transition-all ease-out duration-300 ${activeIndex==index ? 'font-bold': null}`}>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}
