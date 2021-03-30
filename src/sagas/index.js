import { spawn } from 'redux-saga/effects';

import { movieWatcher } from 'models/movie/movieSagas';
import { movieListWatcher } from 'models/movieList/movieListSagas';

function* rootSaga() {
  yield spawn(movieListWatcher);
  yield spawn(movieWatcher);
}

export default rootSaga;