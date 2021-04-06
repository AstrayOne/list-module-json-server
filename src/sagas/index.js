import { spawn } from 'redux-saga/effects';

import { movieWatcher } from 'models/movie/sagas';
import { movieListWatcher } from 'models/movieList/sagas';

function* rootSaga() {
  yield spawn(movieListWatcher);
  yield spawn(movieWatcher);
}

export default rootSaga;
