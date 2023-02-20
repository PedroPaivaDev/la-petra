import React from 'react';
import styles from './Home.module.css';

// import Carousel from '../../components/Carousel/Carousel';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
// import Loading from '../../helpers/Loading';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <Carousel/> */}
      <SlickSlider/>
      {/* <Loading/> */}
    </div>
  )
}

export default Home;