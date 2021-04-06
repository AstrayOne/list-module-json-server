export const fetchMovieList = () => {
  return {
    type: 'FETCH_MOVIELIST',
  };
};

export const setMovieList = (movieList) => {
  return {
    type: 'SET_MOVIELIST',
    movieList,
  };
};

export const showMovieListError = () => {
  return {
    type: 'SHOW_MOVIELIST_ERROR',
  };
};
export const hideMovieListError = () => {
  return {
    type: 'HIDE_MOVIELIST_ERROR',
  };
};

export const showMovieListLoading = () => {
  return {
    type: 'SHOW_MOVIELIST_LOADING',
  };
};

export const hideMovieListLoading = () => {
  return {
    type: 'HIDE_MOVIELIST_LOADING',
  };
};

export const addMovieToStore = (movie) => {
  return {
    type: 'ADD_MOVIE_TO_STORE',
    movie,
  };
};

export const editMovieInStore = (movie) => {
  return {
    type: 'EDIT_MOVIE_IN_STORE',
    movie,
  };
};

export const deleteMovieFromStore = (movieId) => {
  return {
    type: 'DELETE_MOVIE_FROM_STORE',
    movieId,
  };
};