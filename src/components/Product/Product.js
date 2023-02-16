import React from 'react';
import styles from './Product.module.css';

const Product = ({image}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{background: `url(${image}) no-repeat`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <h4>Banofe</h4>
        <p>Delicioso com banana e chantilly</p>
        <h4>R$11,20</h4>
      </div>
    </div>
  )
}

export default Product;