import { call, put, takeEvery } from 'redux-saga/effects';

import { getMovieList } from 'requests';

import {
  showMovieListError,
  hideMovieListError,
  showMovieListLoading,
  hideMovieListLoading,
  setMovieList,
} from './actions';

function* fetchMovieListWorker() {
  try {
    yield put(hideMovieListError());
    yield put(showMovieListLoading());
    const response = yield call(getMovieList);
    yield put(setMovieList(response.data));
    yield put(hideMovieListLoading());
  } catch (e) {
    yield put(hideMovieListLoading());
    yield put(showMovieListError());
  }
}

export function* movieListWatcher() {
  yield takeEvery('FETCH_MOVIELIST', fetchMovieListWorker);
}
