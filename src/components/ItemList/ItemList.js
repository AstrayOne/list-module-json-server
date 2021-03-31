import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import Item from 'components/Item';
import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';
import { fetchMovieList } from 'models/movieList/movieListActions';
import styles from './ItemList.module.css';

const ItemList = (props) => {
  const location = useLocation();
  const { items } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, []);

  const loading = useSelector((state) => state.movieList.movieListLoading);
  const error = useSelector((state) => state.movieList.movieListError);

  const parsed = queryString.parse(location.search);

  let filteredItems = items;

  if (parsed.search) {
    filteredItems = items.filter(
      (item) =>
        item.title.includes(parsed.search) ||
        item.director.includes(parsed.search) ||
        item.releaseYear.includes(parsed.search)
    );
  }

  if (error) {
    return <LoadingError />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.root}>
      {
        filteredItems.map((item) => {
          return (
            <Item key={item.id} item={item}/>
          )
        }
    )}
    </div>
  );
}

export default ItemList;
