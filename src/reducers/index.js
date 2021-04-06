import { combineReducers } from 'redux';
import { movieReducer as movie } from 'models/movie/reducer';
import { movieListReducer as movieList } from 'models/movieList/reducer';

export const rootReducer = combineReducers({
  movie,
  movieList,
});
