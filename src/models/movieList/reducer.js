const initialState = {
  movieList: [],
  movieListLoading: false,
  movieListError: false,
};

const addMovie = (state, movie) => {
  const newList = [...state.movieList, movie];

  const newState = {
    ...state,
    movieList: newList,
  };

  return newState;
};

const deleteMovie = (state, movieId) => {
  const index = state.movieList.findIndex(({ id }) => id === movieId);

  const newList = [
    ...state.movieList.slice(0, index),
    ...state.movieList.slice(index + 1),
  ];

  const newState = {
    ...state,
    movieList: newList,
  };

  return newState;
};

const editMovie = (state, movie) => {
  const index = state.movieList.findIndex(({ id }) => id === movie.id);

  const newList = [
    ...state.movieList.slice(0, index),
    movie,
    ...state.movieList.slice(index + 1),
  ];

  const newState = {
    ...state,
    movieList: newList,
  };
  
  return newState;
};

export const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_STORE':
      return addMovie(state, action.movie);
    case 'EDIT_MOVIE_IN_STORE':
      return editMovie(state, action.movie);
    case 'DELETE_MOVIE_FROM_STORE':
      return deleteMovie(state, action.movieId);
    case 'SET_MOVIELIST':
      return {...state, movieList: action.movieList};
    case 'SHOW_MOVIELIST_ERROR':
      return {...state, movieListError: true};
    case 'HIDE_MOVIELIST_ERROR':
      return {...state, movieListError: false};
    case 'SHOW_MOVIELIST_LOADING':
      return {...state, movieListLoading: true};
    case 'HIDE_MOVIELIST_LOADING':
      return {...state, movieListLoading: false};
    default:
      return state;
  }
};
