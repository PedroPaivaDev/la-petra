import React from 'react';
import styles from './ContentEasterProduct.module.css';

const ContentEasterProduct = ({products, modalProduct}) => {

  return (
    <div className={styles.container}>
      <div className={styles.image} style={{background: `url(${products[modalProduct].image[0]}) no-repeat center center`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <div className={styles.image} style={{background: `url(${products[modalProduct].image[1]}) no-repeat center center`,backgroundSize: "cover"}}/>
        <h4>{products[modalProduct].name}</h4>
        <p>{products[modalProduct].description}</p>
        <div className={styles.prices}>
          <div>
            <h6>Peso final aprox. {products[modalProduct].weightsm}g</h6>
            <h4 className={styles.price}>R${products[modalProduct].pricesm.toFixed(2)}</h4>
          </div>
          <div>
          <h6>Peso final aprox. {products[modalProduct].weightlg}g</h6>
            <h4 className={styles.price}>R${products[modalProduct].pricelg.toFixed(2)}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentEasterProduct;