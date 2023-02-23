import React from 'react';
import styles from './Carousel.module.css';
import {SLIDER_GET} from '../../services/api';

import useFetch from '../../hooks/useFetch';
import Loading from '../../helpers/Loading';

const Carousel = () => {
  const {data, loading, error, request} = useFetch();
  const [products, setProducts] = React.useState();
  const [photos, setPhotos] =  React.useState();
  const [slide, setSlide] = React.useState(0);

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
        display: "none"
      }}
    }, {}));
  }, [data])

  React.useEffect(() => {
    products && setPhotos(Object.keys(products))
  },[data])

  React.useEffect(() => {
    photos && setProducts({
      ...products, [photos[slide]]: {
        image: products[photos[slide]].image,
        display: "flex"
      }
    })
  }, [photos]);

  React.useEffect(() => {
    if(products && slide===0) {
      setProducts({
        ...products, 
        [photos[photos.length-1]]: {
          image: products[photos[photos.length-1]].image,
          display: "none"
        },
        [photos[slide]]: {
          image: products[photos[slide]].image,
          display: "flex"
        }
      });
    } else {
      products && setProducts({
        ...products, 
        [photos[slide-1]]: {
          image: products[photos[slide-1]].image,
          display: "none"
        },
        [photos[slide]]: {
          image: products[photos[slide]].image,
          display: "flex"
        }
      });
    }
    
  },[slide]);

  React.useEffect(() => {
    photos && setTimeout(function () {
      if(slide>=(photos.length-1)) {
        setSlide(0)
      } else {
        setSlide(slide+1)
      }
    }, 2500)
  })

  if(error) return <p>Erro ao carregar</p>;
  if(loading) return <Loading/>;
  if(photos) return (
    <div className={styles.container}>
      {photos && photos.map((photo, index) => (
        <div className={styles.photo} key={index} style={{background: `url(${products[photo].image}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center", display:`${products[photo].display}`}}/>
      ))}
    </div>
  )
}

export default Carousel;