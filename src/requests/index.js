import axios from 'axios';

export const getMovieList = () => {
  return axios({
    method: 'get',
    url: `http://localhost:3000/movieList`,
  });
};

export const getMovie = (movieId) => {
  return axios({
    method: 'get',
    url: `http://localhost:3000/movieList/${movieId}`,
  });
};

export const addMovie = (movie) => {
  return axios({
    method: 'post',
    url: `http://localhost:3000/movieList`,
    data: movie,
  });
};

export const deleteMovie = (movieId) => {
  return axios({
    method: 'delete',
    url: `http://localhost:3000/movieList/${movieId}`,
  });
};

export const editMovie = (movie) => {
  return axios({
    method: 'patch',
    url: `http://localhost:3000/movieList/${movie.id}`,
    data: movie,
  });
};
