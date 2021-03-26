import React, { useEffect } from 'react';
import styles from './ItemDetail.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


import { fetchMovie } from 'actions';
import LoadingSpinner from 'components/LoadingSpinner';
import ResponseError from 'components/ResponseError';

const ItemDetail = (props) => {
  const dispatch = useDispatch();

  const location = useLocation();
  //const history = useHistory();

  //console.log(location);
  
  //const parsed = queryString.parse(location);
  //console.log(parsed);

  const splitedString = location.pathname.split('/');

  const itemId = splitedString[splitedString.length-1];
  //console.log(itemId);

  useEffect(() => {
    dispatch(fetchMovie(itemId));
  }, [])

  const item = useSelector(state => state.movie);
  const isError = useSelector(state => state.isError);
  const isLoading = useSelector(state => state.isLoading);

  //const item = useSelector((state) => state.movieList.find((movie => movie.id == itemId)));
  // const index = itemList.findIndex(({ id }) => id == itemId);
  // const item = itemList[index];

  // console.log(itemList);
  // console.log(index);
  console.log(item);


  // const newItem = item.map((movie) => {
  //   if(movie.id = movieId){
  //     return movie;
  //   }
  // })
  //item

  //console.log(item);
  

  //console.log(item);

  // useEffect(() => {
    
  //   dispatch(fetchMovie(itemId))
  // }, [])

  //if (props.item) {

  if(isLoading) {
    return <LoadingSpinner />
  }

  if(isError) {
    return <ResponseError />
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
  

  // if (item) {
  //   //const { item } = props;
  //   return (
  //     <div className={styles.root}>
  //       <div className={styles.item}>
  //         <p className={styles.title}>{`${item.title}, ${item.releaseYear}`}</p>
  //         <p className={styles.director}>{item.director}</p>
  //         <p className={styles.runningTime}>{item.runningTime}</p>
  //       </div>
  //     </div>
  //    );
  // }


  // else
  //   return (
  //     <div className={styles.root}>
  //        <h1>Page not found</h1>
  //     </div>
  //   )
};

// ItemDetail.defaultProps = {
//   item: {},
// };

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    director: PropTypes.string,
    releaseYear: PropTypes.string,
    runningTime: PropTypes.string,
  }),
};

export default ItemDetail;
