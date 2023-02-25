import React from 'react';
// import styles from './Products.module.css';
import styles from './GridProducts.module.css';

import useFetch from '../../hooks/useFetch';
import {PRODUCTS_GET} from '../../services/api';

import Product from '../../components/Product/Product';
import Loading from '../../helpers/Loading';
import ModalProduct from '../../components/Product/ModalProduct';

const Products = () => {
  const {data, error, loading, request} = useFetch();
  const [products, setProducts] = React.useState([]);
  const [idsArray, setIdsArray] =  React.useState(null);
  const [modalProduct, setModalProduct] = React.useState();

  React.useEffect(() => {
    async function fetchProducts() {
      const {url} = PRODUCTS_GET();
      const {response, json} = await request(url);
    }
    fetchProducts();
  },[request])

  React.useEffect(() => {
    data && setProducts(data.reduce((total, currentValue) => {
      return {...total, [currentValue.id]: {
        id: currentValue.id,
        name: currentValue.name,
        description: currentValue.description,
        price: currentValue.price,
        image: currentValue.image
      }}
    }, {}));
  }, [data])

  React.useEffect(() => {
    products && setIdsArray(Object.keys(products))
  },[products])

  if(error) return <p>Não foi possível carregar os produtos. Verifique sua conexão com a internet</p>;
  if(loading) return <Loading/>;
  if(idsArray) return (
    <div className={`${styles.container} animeLeft`}>
      {modalProduct && 
        <ModalProduct
          products={products}
          modalProduct={modalProduct}
          setModalProduct={setModalProduct}
        />
      }
      <div className={styles.products}>
        {idsArray.map((id) => (
          <Product key={products[id].id} product={products[id]} modalProduct={modalProduct} setModalProduct={setModalProduct}/>
        ))}
      </div>
    </div>
  );  
}

export default Products;