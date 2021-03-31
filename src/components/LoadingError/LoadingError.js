import React from 'react';

import styles from './LoadingError.module.css';

const LoadingError = () => {
  return (
    <div className={styles.root}>
      <div className={styles.errorIcon} />
      <p className={styles.errorText}>Loading Error...</p>
    </div>
  );
}

export default LoadingError;
