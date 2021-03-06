import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.root}>
      <Link to="/" className={styles.homeNav}>
        Home
      </Link>
    </div>
  );
};

export default Header;
