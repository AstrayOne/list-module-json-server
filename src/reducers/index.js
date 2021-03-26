const initialState = {
  //lastId: 0,
  movieList: [],
  movie: {},
  isLoading: false,
  isError: false
};

const setMovies = (state, movies) => {
  const newState = 
  {
    ...state,
    movieList: movies,
  }

  return newState;
}

const setMovie = (state, movie) => {
  const newState = 
  {
    ...state,
    movie: movie,
  }

  return newState;
}

const setError = (state, isError) => {
  return {...state, isError: isError}
}

const setLoading = (state, isLoading) => {
  return {...state, isLoading: isLoading}
}

// const addMovie = (state, movie) => {
//   const newLastId = state.lastId + 1;
//   const newMovie = {id: newLastId, ...movie};
//   const newList = [...state.movieList, newMovie];

//   const newState = {
//     lastId: newLastId,
//     movieList: newList,
//   };

//   return newState;
// }

// const deleteMovie = (state, movieId) => {
//   const index = state.movieList.findIndex(({ id }) => id === movieId);

//   const newlist = [
//     ...state.movieList.slice(0, index),
//     ...state.movieList.slice(index + 1),
//   ];

//   const newState = {
//     ...state,
//     movieList: newlist
//   }

//   return newState;
// }

// const editMovie = (state, movie) => {
//   const index = state.movieList.findIndex(({ id }) => id === movie.id);

//   const newlist = [
//     ...state.movieList.slice(0, index),
//     movie,
//     ...state.movieList.slice(index + 1)
//   ];
  
//   const newState = {
//     ...state,
//     movieList: newlist
//   }

//   return newState;
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {

    // case 'ADD_MOVIE':
    //   return addMovie(state, action.movie);

    // case 'DELETE_MOVIE':
    //   return deleteMovie(state, action.movieId);

    // case 'EDIT_MOVIE':
    //   return editMovie(state, action.movie);

    case 'SET_MOVIES':
      return setMovies(state, action.movies);

    case 'SET_MOVIE':
      return setMovie(state, action.movie);

    case 'SET_ERROR':
      return setError(state, action.isError);
  
    case 'SET_LOADING':
      return setLoading(state, action.isLoading);

    default:
      return state;
  }
};

export default reducer;
