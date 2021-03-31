const initialState = {
  movieList: [],
  movieListLoading: false,
  movieListError: false,
};

export const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIELIST':
      return {...state, movieList: action.movieList}
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
