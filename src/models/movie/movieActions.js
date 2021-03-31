export const fetchMovie = (movieId) => {
  return {
    type: 'FETCH_MOVIE',
    movieId,
  };
};

export const setMovie = (movie) => {
  return {
    type: 'SET_MOVIE',
    movie,
  };
};

export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie,
  };
};

export const deleteMovie = (movieId) => {
  return {
    type: 'DELETE_MOVIE',
    movieId,
  };
};

export const editMovie = (movie) => {
  return {
    type: 'EDIT_MOVIE',
    movie,
  };
};

export const showMovieError = () => {
  return {
    type: 'SHOW_MOVIE_ERROR',
  };
};

export const hideMovieError = () => {
  return {
    type: 'HIDE_MOVIE_ERROR',
  };
};

export const showMovieLoading = () => {
  return {
    type: 'SHOW_MOVIE_LOADING',
  };
};

export const hideMovieLoading = () => {
  return {
    type: 'HIDE_MOVIE_LOADING',
  };
};
