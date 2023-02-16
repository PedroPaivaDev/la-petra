import React from 'react';
import styles from './Home.module.css';

import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <div className={styles.container}>
      <Carousel/>
    </div>
  )
}

export default Home;