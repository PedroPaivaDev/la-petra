import React from 'react';
import styles from './Carousel.module.css';
import getProducts from '../../services/api';

const Carousel = () => {
  const [data, setData] = React.useState()
  const [products, setProducts] = React.useState();
  const [photos, setPhotos] =  React.useState();
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const dataProducts = await getProducts();
      setData(dataProducts);
    }
    fetchData();
  },[]);

  React.useEffect(() => {
    data && setProducts(data.reduce((total, currentValue) => {
      return {...total, [currentValue.name]: {
        name: currentValue.name,
        image: currentValue.image,
        display: "none"
      }}
    }, {}));
  }, [data]);

  React.useEffect(() => {
    products && setPhotos(Object.keys(products))
  },[data]);

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
    }, 2000)
  })

  return (
    <div className={styles.container}>
      {photos && photos.map((photo, index) => (
        <div key={index} style={{background: `url(${products[photo].image}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center", width: `100%`, height: `100%`, display:`${products[photo].display}`}}/>
      ))}
    </div>
  )
}

export default Carousel;