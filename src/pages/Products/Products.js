import React from 'react';
import Product from '../../components/Product/Product';
import photos from '../../services/photos';
import styles from './Products.module.css';

const Products = () => {

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {photos.map((photo,index) => (
          <Product key={index} image={photo}/>
        ))}
      </div>
    </div>
  )
}

export default Products;