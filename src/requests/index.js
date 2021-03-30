import axios from 'axios';

export const getMovieList = () => {
  return axios({
    method: 'get',
    url: `https://my-json-server.typicode.com/AstrayOne/list-module-json-server/movieList`
    //url: `http://localhost:3000/movieList`,
  });
}

export const getMovie = (movieId) => {
  return axios({
    method: 'get',
    url: `https://my-json-server.typicode.com/AstrayOne/list-module-json-server/movieList/${movieId}`
    //url: `http://localhost:3000/movieList/${movieId}`,
  });
}

export const addMovie = (movie) => {
  return axios({
    method: 'post',
    url: `https://my-json-server.typicode.com/AstrayOne/list-module-json-server/movieList`,
    //url: `http://localhost:3000/movieList`,
    data: movie
  });
}

export const deleteMovie = (movieId) => {
  return axios({
    method: 'delete',
    url: `https://my-json-server.typicode.com/AstrayOne/list-module-json-server/movieList/${movieId}`
    //url: `http://localhost:3000/movieList/${movieId}`,
  });
}

export const editMovie = (movie) => {
  return axios({
    method: 'patch',
    url: `https://my-json-server.typicode.com/AstrayOne/list-module-json-server/movieList/${movie.id}`,
    //url: `http://localhost:3000/movieList/${movie.id}`,
    data: movie
  });
}