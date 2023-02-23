import React from 'react';
import styles from './Home.module.css';

// import Carousel from '../../components/Carousel/Carousel';
import SlickSlider from '../../components/SlickSlider/SlickSlider';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <Carousel/> */}
      <SlickSlider/>
    </div>
  )
}

export default Home;