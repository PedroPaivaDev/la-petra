import React from 'react';
import styles from './SlickSlider.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Loading from '../../helpers/Loading';

const SlickSlider = ({loading, error, photos, className}) => {

  const settings = {
    dots: true, /* bolinhas */
    infinite: true, /* não para */
    speed: 500, /* tempo de troca de slide */
    slidesToShow: 1, /* quantidade de foto mostrada de cada vez */
    autoplay: true,
    autoplaySpeed: 2500,
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

  if(error) return <p>Erro ao carregar</p>;
  if(loading) return <Loading/>;
  if(photos) return (
    <div className={`${styles.container} animeLeft`}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <img key={index} className={className} src={photo} alt={`photo${index}`}/>
          // <div key={index} className={className} style={{background: `url(${photo}) no-repeat center center`, backgroundSize: "cover"}}/>
        ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;