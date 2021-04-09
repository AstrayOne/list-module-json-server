const initialState = {
  movieList: [],
  movieListLoading: false,
  movieListError: false,
  movie: {},
  movieLoading: false,
  movieError: false,
};

const addMovieSuccess = (state, movie) => {
  const newList = [...state.movieList, movie];

  const newState = {
    ...state,
    movieList: newList,
  };

  return newState;
};

const deleteMovieSuccess = (state, movieId) => {
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

const editMovieSuccess = (state, movie) => {
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


export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIELIST':
      return {...state, movieListLoading: true, movieListError: false};

    case 'FETCH_MOVIELIST_SUCCESS':
      return {...state, movieList: action.movieList, movieListLoading: false};

    case 'FETCH_MOVIELIST_FAILURE':
      return {...state, movieListLoading: false, movieListError: true};

    case 'FETCH_MOVIE':
      return {...state, movieLoading: true, movieError: false};

    case 'FETCH_MOVIE_SUCCESS':
      return {...state, movie: action.movie, movieLoading: false};

    case 'FETCH_MOVIE_FAILURE':
      return {...state, movieLoading: false, movieError: true};

    case 'ADD_MOVIE_SUCCESS':
      return addMovieSuccess(state, action.movie);

    case 'EDIT_MOVIE_SUCCESS':
      return editMovieSuccess(state, action.movie);

    case 'DELETE_MOVIE_SUCCESS':
      return deleteMovieSuccess(state, action.movieId);

    default:
      return state;
  }
};
