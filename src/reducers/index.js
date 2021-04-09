import { combineReducers } from 'redux';
import { movieReducer as movie } from 'models/movie/reducer';

export const rootReducer = combineReducers({
  movie,
});
