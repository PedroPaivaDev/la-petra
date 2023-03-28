import React from 'react';
import styles from './Carousel.module.css';
import Loading from '../../helpers/Loading';

const Carousel = ({loading, error, product, className}) => {
  const [photos, setPhotos] =  React.useState();
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    product && setPhotos(product.reduce((total, currentValue) => {
      return {...total, [currentValue]: {
        image: currentValue,
        display: "flex"
      }}
    }, {}));
  }, [product])

  React.useEffect(() => {
    if(photos && slide===0) {
      setPhotos({
        ...photos,
        [Object.keys(photos)[Object.keys(photos).length-1]]: {
          image: photos[Object.keys(photos)[Object.keys(photos).length-1]].image,
          display: "none"
        },
        [Object.keys(photos)[slide]]: {
          image: photos[Object.keys(photos)[slide]].image,
          display: "flex"
        }
      });
    } else {
      photos && setPhotos({
        ...photos,
        [Object.keys(photos)[slide-1]]: {
          image: photos[Object.keys(photos)[slide-1]].image,
          display: "none"
        },
        [Object.keys(photos)[slide]]: {
          image: photos[Object.keys(photos)[slide]].image,
          display: "flex"
        }
      });
    }    
  },[slide]);

  React.useEffect(() => {
    photos && setTimeout(function () {
      if(slide>=(Object.keys(photos).length - 1)) {
        setSlide(0)
      } else {
        setSlide(slide+1)
      }
    }, 2500)
  })

  if(error) return <p>Erro ao carregar</p>;
  if(loading) return <Loading/>;
  if(photos) return (
    <div className={`${className} ${styles.container}`}>
      {Object.keys(photos).map((photo, index) => (
        <div className={styles.photo} key={index} style={{background: `url(${photo}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center", display:`${photos[photo].display}`}}/>
      ))}
    </div>
  )
}

export default Carousel;