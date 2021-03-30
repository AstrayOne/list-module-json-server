import React, { useEffect } from 'react';
import styles from './ItemDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMovie } from 'models/movie/movieActions';

import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';

const ItemDetail = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const splitedString = location.pathname.split('/');

  const itemId = splitedString[splitedString.length-1];

  useEffect(() => {
    dispatch(fetchMovie(itemId));
  }, [])

  const item = useSelector(state => state.movie.movie);
  const isError = useSelector(state => state.movie.movieError);
  const isLoading = useSelector(state => state.movie.movieLoading);

  if(isLoading) {
    return <LoadingSpinner />
  }

  if(isError) {
    return <LoadingError />
  }

  return(
    <div className={styles.root}>
      <div className={styles.item}>
        <p className={styles.title}>{`${item.title}, ${item.releaseYear}`}</p>
        <p className={styles.director}>{item.director}</p>
        <p className={styles.runningTime}>{item.runningTime}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
