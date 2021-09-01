import axios from 'axios'

const API_KEY = '3e074b6d14a7158d77bae02b97da066e'
const BASE_URL = 'https://api.themoviedb.org/3/'

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl('movie/popular'))
        //axios faz a mesma coisa que o fetch só que mais simples ainda
    }

    static getMoviesDetail(id){
        return axios(withBaseUrl(`movie/${id}`))
    }
}


