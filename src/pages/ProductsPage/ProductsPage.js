import React from 'react';
import styles from './ProductsPage.module.css';
import { NavLink, useLocation } from 'react-router-dom';

import { getProducts } from '../../services/firebase';
import { BagContext } from '../../contexts/BagContext';

import Seasonal from '../../components/Seasonal/Seasonal';
import Products from '../../components/Products/Products';
import ModalProduct from '../../components/Products/ModalProduct';

const ProductsPage = () => {
  const {pathname} = useLocation();
  const [ , , category, setCategory] = React.useContext(BagContext);
  const [modalProduct, setModalProduct] = React.useState();
  const [delivery, setDelivery] = React.useState();
  const [cakes, setCakes] = React.useState();
  const [seasonal, setSeasonal] = React.useState();

  React.useEffect(() => {
    getProducts('delivery', setDelivery);
    getProducts('cakes', setCakes);
  },[])

  React.useEffect(() => {
    setCategory(pathname);
  }, [pathname])

  return (
    <div className={`page animeLeft`}>
        {modalProduct && 
          <ModalProduct
            modalProduct={modalProduct}
            setModalProduct={setModalProduct}
          />
        }
        <nav className={styles.subNavbar}>
          <div className={styles.navLinks}>
            <NavLink to="delivery" activeClassName={styles.activeProducts}>Delivery</NavLink>
            <NavLink to="bolos" activeClassName={styles.activeProducts}>Bolos</NavLink>
            <NavLink to="docinhos" activeClassName={styles.activeProducts}>Docinhos</NavLink>
            <NavLink to="sazonal" activeClassName={styles.activeProducts}>Sazonal</NavLink>
          </div>
        </nav>
        {pathname==='/produtos' && 
          <p style={{margin: '20px', textAlign:'center'}}>Selecione acima a categoria de produto desejada</p>
        }
        <div className={styles.products}>
          {category==='/produtos/delivery' &&
            <Products category={delivery} setModalProduct={setModalProduct}/>
          }
          {category==='/produtos/bolos' &&
            <Products category={cakes} setModalProduct={setModalProduct}/>
          }
          {category==='/produtos/docinhos' &&
            'Docinhos'
          }
          {category==='/produtos/sazonal' &&
            <Seasonal
              season={seasonal}
              setSeason={setSeasonal}
              setModalProduct={setModalProduct}
            />
          }
        </div>
    </div>
  )
}

export default ProductsPage;