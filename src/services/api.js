import axios from 'axios';

//url filmes em cartaz\\
// https://api.themoviedb.org/3/

//movie/now_playing?api_key=180ddd2db29f2102a497fe6725d30896&language=pt-br&page=1

export const key = '180ddd2db29f2102a497fe6725d30896'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;