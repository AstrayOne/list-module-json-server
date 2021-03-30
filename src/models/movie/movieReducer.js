const initialState = {
  movie: {},
  movieLoading: false,
  movieError: false
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return {...state, movie: action.movie}

    case 'SHOW_MOVIE_ERROR':
      return {...state, movieError: true};

    case 'HIDE_MOVIE_ERROR':
      return {...state, movieError: false};

    case 'SHOW_MOVIE_LOADING':
      return {...state, movieLoading: true};
  
    case 'HIDE_MOVIE_LOADING':
      return {...state, movieLoading: false};
    
    default:
      return state;
  }
};

