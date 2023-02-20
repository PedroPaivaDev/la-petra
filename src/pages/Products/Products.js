import React from 'react';
import styles from './Products.module.css';
import useFetch from '../../hooks/useFetch';
import {PRODUCTS_GET} from '../../services/api';

import Product from '../../components/Product/Product';
import Loading from '../../helpers/Loading';

const Products = () => {
  const {data, error, loading, request} = useFetch();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const {url} = PRODUCTS_GET();
      const {response, json} = await request(url);
    }
    fetchProducts();
  },[request])

  React.useEffect(() => {
    data && setProducts(data)
  }, [data])

  if(error) return <p>Não foi possível carregar os produtos. Verifique sua conexão com a internet</p>;
  if(loading) return <Loading/>;
  if(products) return (
    <div className={`${styles.container} animeLeft`}>
      <div className={styles.products}>
        {products.map((product,index) => (
          <Product key={index} product={product}/>
        ))}
        {products.map((product,index) => (
          <Product key={index} product={product}/>
        ))}
      </div>
    </div>
  );  
}

export default Products;