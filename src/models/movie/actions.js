export const fetchMovie = (movieId) => {
  return {
    type: 'FETCH_MOVIE',
    movieId,
  };
};

export const fetchMovieSuccess = (movie) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    movie,
  };
};

export const fetchMovieFailure = () => {
  return {
    type: 'FETCH_MOVIE_FAILURE',
  };
};

export const fetchMovieList = () => {
  return {
    type: 'FETCH_MOVIELIST',
  };
};

export const fetchMovieListSuccess = (movieList) => {
  return {
    type: 'FETCH_MOVIELIST_SUCCESS',
    movieList,
  };
};

export const fetchMovieListFailure = () => {
  return {
    type: 'FETCH_MOVIELIST_FAILURE',
  };
};


export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie,
  };
};

export const addMovieSuccess = (movie) => {
  return {
    type: 'ADD_MOVIE_SUCCESS',
    movie,
  };
};

export const addMovieFailure = () => {
  return {
    type: 'ADD_MOVIE_FAILURE',
  };
};

export const deleteMovie = (movieId) => {
  return {
    type: 'DELETE_MOVIE',
    movieId,
  };
};

export const deleteMovieSuccess = (movieId) => {
  return {
    type: 'DELETE_MOVIE_SUCCESS',
    movieId,
  };
};

export const deleteMovieFailure = () => {
  return {
    type: 'DELETE_MOVIE_FAILURE',
  };
};

export const editMovie = (movie) => {
  return {
    type: 'EDIT_MOVIE',
    movie,
  };
};

export const editMovieSuccess = (movie) => {
  return {
    type: 'EDIT_MOVIE_SUCCESS',
    movie,
  };
};

export const editMovieFailure = () => {
  return {
    type: 'EDIT_MOVIE_FAILURE',
  };
};
