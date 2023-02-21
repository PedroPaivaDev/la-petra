import React from 'react';
import styles from './SlickSlider.module.css';
import {SLIDER_GET} from '../../services/api';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useFetch from '../../hooks/useFetch';
import Loading from '../../helpers/Loading';

const SlickSlider = () => {
  const {data, loading, error, request} = useFetch();
  const [products, setProducts] = React.useState(null);
  const [photos, setPhotos] =  React.useState(null);

  React.useEffect(() => {
    async function fetchProducts() {
      const {url} = SLIDER_GET();
      const {response, json} = await request(url)
    }
    fetchProducts();
  },[request])

  React.useEffect(() => {
    data && setProducts(data.reduce((total, currentValue) => {
      return {...total, [currentValue.name]: {
        name: currentValue.name,
        image: currentValue.image,
        display: "flex"
      }}
    }, {}));
  }, [data])

  React.useEffect(() => {
    products && setPhotos(Object.keys(products))
  },[products])

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
          <img key={index} src={products[photo].image} alt={products[photo].name}/>
        ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;