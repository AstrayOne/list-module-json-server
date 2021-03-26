import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import styles from './ItemList.module.css';
import Item from 'components/Item';
import LoadingSpinner from 'components/LoadingSpinner';
import ResponseError from 'components/ResponseError';

import { fetchMovies } from 'actions';

const ItemList = (props) => {
  const location = useLocation();
  const { items } = props; 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [])

  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.isError);

  const parsed = queryString.parse(location.search);

  let filteredItems = items;

  if (parsed.search) {
    filteredItems = items.filter((item) => item.title.includes(parsed.search) ||
      item.director.includes(parsed.search) || item.releaseYear.includes(parsed.search) 
    )
  }

  if(isError) {
    return (<ResponseError />);
  }

  if(isLoading) {
    return (<LoadingSpinner />);
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
