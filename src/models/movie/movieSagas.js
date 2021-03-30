import { call, put, takeEvery } from 'redux-saga/effects';

import { 
  showMovieError, 
  hideMovieError, 
  showMovieLoading, 
  hideMovieLoading,
  setMovie
} from './movieActions';

import { fetchMovieList } from 'models/movieList/movieListActions';

import { getMovie, addMovie, editMovie, deleteMovie } from 'requests';

function* addMovieWorker(action) {
  try {
    yield call(addMovie, action.movie);
    yield put(fetchMovieList());
  } catch (e) {
    alert('Add error');
  }
}

function* deleteMovieWorker(action) {
  try {
    yield call(deleteMovie, action.movieId);
    yield put(fetchMovieList());
  } catch (e) {
    alert('Delete error');
  }
}

function* editMovieWorker(action) {
  try {
    yield call(editMovie, action.movie);
    yield put(fetchMovieList());
  } catch (e) {
    alert('Edit error');
  }
}

function* fetchMovieWorker(action) {
  try {
    yield put(hideMovieError());
    yield put(showMovieLoading());
    const response = yield call(getMovie, action.movieId);
    yield put(setMovie(response.data));
    yield put(hideMovieLoading());
  } catch (e) {
    yield put(hideMovieLoading());
    yield put(showMovieError());
  }
}

export function* movieWatcher() {
  yield takeEvery('FETCH_MOVIE', fetchMovieWorker);
  yield takeEvery('ADD_MOVIE', addMovieWorker);
  yield takeEvery('DELETE_MOVIE', deleteMovieWorker);
  yield takeEvery('EDIT_MOVIE', editMovieWorker)
}