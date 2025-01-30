import React, { useEffect, useState } from 'react'
import GenreList from '../components/genreList'
import globalApi from '../services/globalApi'
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import GamesByGenreId from '../components/GamesByGenreId';


export default function home() {
  const [allGamesList,setAllGamesList] = useState();
  const [gameListByGenre,setgameListByGenre] = useState([]);
  
  useEffect(()=>{
    getAllGamesList()
    getGameListByGenreId()
  },[])
  
  const getAllGamesList = ()=> {
    globalApi.getAllGames.then((resp)=>{
      setAllGamesList(resp.data.results)
      setgameListByGenre(resp.data.results)
    })
  }

  const getGameListByGenreId = (id) =>{
    globalApi.getGameListByGenreId(4)
    .then((resp)=>{
      console.log("game genres by id: ",resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-8 gap-2'>
      <div className='hidden md:block px-8'>
        <GenreList/>
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGamesList ?.length>0&&gameListByGenre.length>0? 
        <div>
          <Banner gameBanner={allGamesList[0]}/>
          </div>
          :null}
          <Trending gameListTrending={allGamesList}/>
          <GamesByGenreId gameList={gameListByGenre}/>
        </div>
    </div>
  )
}
