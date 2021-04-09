import { call, put, takeEvery } from 'redux-saga/effects';

import { 
  getMovieList,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie,
} from 'requests';

import {
  fetchMovieListSuccess,
  fetchMovieListFailure,
  fetchMovieSuccess,
  fetchMovieFailure,
  editMovieSuccess,
  editMovieFailure,
  addMovieSuccess,
  addMovieFailure,
  deleteMovieSuccess,
  deleteMovieFailure,
} from './actions';

function* fetchMovieListWorker() {
  try {
    const response = yield call(getMovieList);
    yield put(fetchMovieListSuccess(response.data));
  } catch (e) {
    yield put(fetchMovieListFailure());
  }
}

function* fetchMovieWorker(action) {
  try {
    const response = yield call(getMovie, action.movieId);
    yield put(fetchMovieSuccess(response.data));
  } catch (e) {
    yield put(fetchMovieFailure());
  }
}

function* addMovieWorker(action) {
  try {
    const response = yield call(addMovie, action.movie);
    yield put(addMovieSuccess(response.data));
  } catch (e) {
    yield put(addMovieFailure());
    alert('Add error');
  }
}

function* deleteMovieWorker(action) {
  try {
    yield call(deleteMovie, action.movieId);
    yield put(deleteMovieSuccess(action.movieId));
  } catch (e) {
    yield put(deleteMovieFailure());
    alert('Delete error');
  }
}

function* editMovieWorker(action) {
  try {
    yield call(editMovie, action.movie);
    yield put(editMovieSuccess(action.movie));
  } catch (e) {
    yield put(editMovieFailure());
    alert('Edit error');
  }
}

export function* movieWatcher() {
  yield takeEvery('FETCH_MOVIELIST', fetchMovieListWorker);
  yield takeEvery('FETCH_MOVIE', fetchMovieWorker);
  yield takeEvery('ADD_MOVIE', addMovieWorker);
  yield takeEvery('DELETE_MOVIE', deleteMovieWorker);
  yield takeEvery('EDIT_MOVIE', editMovieWorker);
}
