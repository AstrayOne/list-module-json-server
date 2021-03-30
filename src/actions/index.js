// export const addMovie = (movie) => {
//   return {
//     type: 'ADD_MOVIE',
//     movie,
//   };
// };

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

export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    movies,
  };
};

export const setMovie = (movie) => {
  return {
    type: 'SET_MOVIE',
    movie,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: 'SET_LOADING',
    isLoading,
  };
};

export const setError = (isError) => {
  return {
    type: 'SET_ERROR',
    isError,
  };
};


export const fetchMovies = () => {
  return {
    type: 'FETCH_MOVIES',
  }
}

export const fetchMovie = (movieId) => {
  return {
    type: 'FETCH_MOVIE',
    movieId
  }
}

export const showItemError = () => {
  return {
    type: 'SHOW_ITEM_ERROR',
  }
}

export const hideItemError = () => {
  return {
    type: 'HIDE_ITEM_ERROR',
  }
}

export const showItemListError = () => {
  return {
    type: 'SHOW_ITEMLIST_ERROR',
  }
}

export const hideItemListError = () => {
  return {
    type: 'HIDE_ITEMLIST_ERROR',
  }
}

export const showItemLoading = () => {
  return {
    type: 'SHOW_ITEM_LOADING',
  }
}

export const hideItemLoading = () => {
  return {
    type: 'HIDE_ITEM_LOADING',
  }
}

export const showItemListLoading = () => {
  return {
    type: 'SHOW_ITEMLIST_LOADING',
  }
}

export const hideItemListLoading = () => {
  return {
    type: 'HIDE_ITEMLIST_LOADING',
  }
}



