import React from 'react';
import styles from './Carousel.module.css';
import photos from '../../services/photos';
import ImgCarousel from './ImgCarousel';

const Carousel = () => {
  // const [widthApp, setWidthApp] = React.useState(window.screen.width - 20)

  // const resizeObserver = new ResizeObserver(e => {
  //   setWidthApp(e[0].borderBoxSize[0].inlineSize - 20);
  // });

  // resizeObserver.observe(document.body);

  return (
    <>
      {photos.map((photo, index) => (
        <ImgCarousel key={index} img={photo}/>
      ))}
    </>
  )
}

export default Carousel;