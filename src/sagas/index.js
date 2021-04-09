import { spawn } from 'redux-saga/effects';

import { movieWatcher } from 'models/movie/sagas';

function* rootSaga() {
  yield spawn(movieWatcher);
}

export default rootSaga;
