import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from 'reducers';
import moviesWatcher from 'sagas';

const sagaMiddleware = createSagaMiddleware()

//let localState = JSON.parse(localStorage.getItem('state'));

//if(localState == null) localState = {lastId: 0, movieList: []};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(moviesWatcher);

// store.subscribe(() => {
//   const state = JSON.stringify(store.getState());
//   localStorage.setItem('state', state);
// });

export default store;