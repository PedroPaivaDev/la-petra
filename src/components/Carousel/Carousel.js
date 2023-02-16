import React from 'react';
import styles from './Carousel.module.css';

import banofe from '../../assets/products/banofe.jpg';

const Carousel = () => {
  // const [widthApp, setWidthApp] = React.useState(window.screen.width - 20)

  // const resizeObserver = new ResizeObserver(e => {
  //   setWidthApp(e[0].borderBoxSize[0].inlineSize - 20);
  // });

  // resizeObserver.observe(document.body);

  return (
    <div className={styles.container} style={{background: `url(${banofe}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
  )
}

export default Carousel;