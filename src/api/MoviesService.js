import axios from 'axios';

const API_KEY = '2433f50bbf4766c51e37ab1ee8f8c86d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesServices {
  static getMovies() {
    return axios(withBaseUrl('movie/popular'));
  }
}