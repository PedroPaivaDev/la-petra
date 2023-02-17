import React from 'react';
import styles from './SlickSlider.module.css';
import getProducts from '../../services/api';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const [products, setProducts] = React.useState();
  const [photos, setPhotos] =  React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data.reduce((total, currentValue) => {
        return {...total, [currentValue.name]: {
          name: currentValue.name,
          image: currentValue.image,
          display: "flex"
        }}
      }, {}));
    }
    fetchData();
  },[])

  React.useEffect(() => {
    products && setPhotos(Object.keys(products))
  },[products])

  const settings = {
    dots: true, /* bolinhas */
    infinite: true, /* não para */
    speed: 500, /* tempo de troca de slide */
    slidesToShow: 1, /* quantidade de foto mostrada de cada vez */
    slidesToScroll: 1, /* quantidade de fotos no total */
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {photos && photos.map((photo, index) => (
          <img key={index} src={products[photo].image} alt={products[photo].name}/>
        ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;