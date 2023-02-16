import React from 'react';
import styles from './Product.module.css';

const Product = ({product}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{background: `url(${product.image}) no-repeat`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <h4>R${product.price.toFixed(2)}</h4>
      </div>
    </div>
  )
}

export default Product;