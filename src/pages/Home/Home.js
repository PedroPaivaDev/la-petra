import React from 'react';
import styles from './Home.module.css';
import Contact from '../../components/Contact/Contact';

// import SlickSlider from '../../components/SlickSlider/SlickSlider';
// import useFetch from '../../hooks/useFetch';
// import { SLIDER_GET } from '../../services/api';

const Home = () => {
  // const {data, loading, error, request} = useFetch();
  // const [photos, setPhotos] = React.useState(null);

  // React.useEffect(() => {
  //   async function fetchPhotos() {
  //     const {url} = SLIDER_GET();
  //     await request(url)
  //   }
  //   fetchPhotos();
  // },[request])

  // React.useEffect(() => {
  //   data && setPhotos(data.reduce((total, currentValue) => {
  //     return [...total, currentValue.image]
  //   }, []));
  // }, [data])

  return (
    <div className={styles.container}>
      {/* <SlickSlider loading={loading} error={error} photos={photos}/> */}
      <Contact/>
    </div>
  )
}

export default Home;