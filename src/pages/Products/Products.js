import React from 'react';
import Product from '../../components/Product/Product';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default Products;