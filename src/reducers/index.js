import { combineReducers } from 'redux';
import { movieReducer as movie }  from 'models/movie/movieReducer';
import { movieListReducer as movieList } from 'models/movieList/movieListReducer';

export const rootReducer = combineReducers({
  movie,
  movieList
});