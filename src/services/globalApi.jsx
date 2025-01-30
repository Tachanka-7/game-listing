import axios from 'axios'

const key='875676928db24ee9931412d6eba09111'
const axiosCreate=axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)
const getGameListByGenreId=(id) => axiosCreate.get('/games?key='+key+'&genres'+ id)

export default{
    getGenreList,
    getAllGames, 
    getGameListByGenreId
}