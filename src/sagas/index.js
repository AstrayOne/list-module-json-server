import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { setMovies, setMovie, setError, setLoading, fetchMovies } from 'actions';

//import { fetchMovie } from 


const fetchMoviesFromApi = () => {
  
  
  return(axios.get('http://localhost:3000/movies')
  .then(function (response) {
    return(response);
  })
  .catch(function (error) {
    console.log(error);
  }))
}

const fetchMovieFromApi = (movieId) => {
//   return fetch('http://localhost:3000/movies');}
// {
  //fetch('http://localhost:3000/movies');
  return axios({
    method: 'get',
    url: `http://localhost:3000/movies/${movieId}`,
  });
}


const addNewMovieToApi = (movie) => {
  return axios({
    method: 'post',
    url: `http://localhost:3000/movies`,
    // headers: {
    //   'content-Type': 'application/json'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    data: movie
    
  });
}

const deleteMovieFromApi = (movieId) => {
  return axios({
    method: 'delete',
    url: `http://localhost:3000/movies/${movieId}`,
    // headers: {
    //   'content-Type': 'application/json'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    //data: movie
    
  });
}

const patchMovieToApi = (movie) => {
  return axios({
    method: 'patch',
    url: `http://localhost:3000/movies/${movie.id}`,
    // headers: {
    //   'content-Type': 'application/json'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    //data: movie

    data: movie
    
  });
}


function* addMovieWorker(action) {
  try {
    //const lastIdResponse = yield call(fetchLastIdFromApi);
    //const newMovie = {id: lastId, ...action.movie};
    const response = yield call(addNewMovieToApi, action.movie);
    yield put(fetchMovies());
    //console.log(response);
    //console.log(response.data);
    //yield put(addMovie(response.data));
  }

  catch (e) {
    console.log('error Addmovie');
  }
}

function* deleteMovieWorker(action) {
  try {
    //const lastIdResponse = yield call(fetchLastIdFromApi);
    //const newMovie = {id: lastId, ...action.movie};
    yield call(deleteMovieFromApi, action.movieId);


    yield put(fetchMovies());
    //console.log(response);
    //console.log(response.data);
    //yield put(addMovie(response.data));
  }

  catch (e) {
    console.log('error delete movie');
  }
}


function* patchMovieWorker(action) {
  try {
    //const lastIdResponse = yield call(fetchLastIdFromApi);
    //const newMovie = {id: lastId, ...action.movie};
    const response = yield call(patchMovieToApi, action.movie);


    yield put(fetchMovies());
    //console.log(response);
    //console.log(response.data);
    //yield put(addMovie(response.data));
  }

  catch (e) {
    console.log('error delete movie');
  }
}



function* fetchMovieWorker(action) {
  try {
    // console.log(action);
    yield put(setError(false));

    yield put(setLoading(true));

    
    yield call(delay, 2000);

    const response = yield call(fetchMovieFromApi, action.movieId);

  

    // console.log(response);

    // console.log(response.data);

    yield put(setMovie(response.data));

    yield put(setLoading(false));
  }

  catch (e) {

    yield put(setLoading(false));

    yield put(setError(true));

    
    //console.log('error movie');
  }
}

function* fetchMoviesWorker() {
  try {
    yield put(setError(false));

    yield put(setLoading(true));

    
    yield call(delay, 2000);

    //yield put(timeout(3000));
    const response = yield call(fetchMoviesFromApi);

    //console.log(response.data);
    
    //const json = yield call(() => new Promise(res => res(response.data.json())));
    

    
    
    //console.log(json);
    yield put(setMovies(response.data));
    
    
    yield put(setLoading(false));
    //yield put(setMovies(json));
     //const user = yield call(Api.fetchUser, action.payload.userId);
    //  const payload = yield call(fetchMovies);
    //  yield put({ type: FETCH_POSTS, payload })
     //yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    
  } catch (e) {
    //console.log('error movies');

    yield put(setError(true));

     //yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
  

    // yield put(setLoading(true));

    
    // yield call(delay, 2000);

    // //yield put(timeout(3000));
    // const response = yield call(fetchMoviesFromApi);

    //console.log(response.data);
    
    //const json = yield call(() => new Promise(res => res(response.data.json())));
    

    //yield timeout(1000);
    
    //console.log(json);
    // yield put(setMovies(response.data));
    

    // yield put(setLoading(false));
    //yield put(setMovies(json));
     //const user = yield call(Api.fetchUser, action.payload.userId);
    //  const payload = yield call(fetchMovies);
    //  yield put({ type: FETCH_POSTS, payload })
     //yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    
  
    

   

     //yield put({type: "USER_FETCH_FAILED", message: e.message});
  
}


const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* moviesWatcher() {
  yield takeEvery('FETCH_MOVIES', fetchMoviesWorker);
  yield takeEvery('FETCH_MOVIE', fetchMovieWorker);
  yield takeEvery('ADD_MOVIE', addMovieWorker);
  yield takeEvery('DELETE_MOVIE', deleteMovieWorker);
  yield takeEvery('EDIT_MOVIE', patchMovieWorker)
}

// async function fetchMovies() {
//   const response = await fetch()
//   return await response.json();
// }

export default moviesWatcher;