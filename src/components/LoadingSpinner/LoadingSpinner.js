import React from 'react';
//import { useSelector } from 'react-redux';

import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return(
    <div className={styles.root}>
      <div className={styles.spinner}>
        
      </div>
    </div>
  );

}

export default LoadingSpinner;