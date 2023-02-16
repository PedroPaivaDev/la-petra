import React from 'react';
import styles from './Products.module.css';
import getProducts from '../../services/api';

import Product from '../../components/Product/Product';
// import photos from '../../services/photos';

const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products && products.map((product,index) => (
          <Product key={index} product={product}/>
        ))}
        {products && products.map((product,index) => (
          <Product key={index} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Products;