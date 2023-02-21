import React from 'react';
import styles from './ContentProduct.module.css';

const ContentProduct = ({products, modalProduct}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{background: `url(${products[modalProduct].image}) no-repeat`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <h4>{products[modalProduct].name}</h4>
        <p>{products[modalProduct].description}</p>
        <h3>R${products[modalProduct].price.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default ContentProduct;