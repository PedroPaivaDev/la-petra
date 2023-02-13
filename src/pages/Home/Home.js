import React from 'react';
import Cloche from '../../Cloche/Cloche';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Cloche/>
    </div>
  )
}

export default Home;