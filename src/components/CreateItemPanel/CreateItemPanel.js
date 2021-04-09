import React from 'react';
import { useDispatch } from 'react-redux';

import { addMovie } from 'models/movie/actions';
import MoviesForm from 'components/MoviesForm';
import styles from './CreateItemPanel.module.css';

const CreateItemPanel = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    director: '',
    releaseYear: '',
    runningTime: '',
  };

  const addItemHandler = (values, onSubmitProps) => {
    dispatch(addMovie(values));
    onSubmitProps.resetForm();
  };

  return (
    <div className={styles.root}>
      <MoviesForm
        initialValues={initialValues}
        onSubmitHandler={addItemHandler}
        buttonName="Add item"
      />
    </div>
  );
}

export default CreateItemPanel;
