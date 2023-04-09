import React from 'react';
import styles from './Products.module.css';
import { NavLink, useLocation } from 'react-router-dom';

import Delivery from '../../components/Delivery/Delivery';
import Cakes from '../../components/Cakes/Cakes';
import Seasonal from '../../components/Seasonal/Seasonal';
import { BagContext } from '../../contexts/BagContext';
import Sweeties from '../../components/Sweeties/Sweeties';

const Products = () => {
  const {pathname} = useLocation();
  const [ , , category, setCategory] = React.useContext(BagContext);

  React.useEffect(() => {
    setCategory(pathname);
  }, [pathname])

  return (
    <div className={`${styles.container} animeLeft`}>
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
      {category==='/produtos/delivery' && <Delivery/>}
      {category==='/produtos/bolos' && <Cakes/>}
      {category==='/produtos/docinhos' && <Sweeties/>}
      {category==='/produtos/sazonal' && <Seasonal/>}
    </div>
  )
}

export default Products;