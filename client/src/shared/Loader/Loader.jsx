// Loader.js
import React from 'react';
import styles from './Loader.module.css'; // Стили для лоадера

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
