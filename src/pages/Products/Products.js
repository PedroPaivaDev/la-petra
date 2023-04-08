import React from 'react';
import styles from './Products.module.css';
import { NavLink, useLocation } from 'react-router-dom';

import Delivery from '../../components/Delivery/Delivery';
import Cakes from '../../components/Cakes/Cakes';
import Seasonal from '../../components/Seasonal/Seasonal';

const Products = () => {
  const {pathname} = useLocation();
  const [category, setCategory] = React.useState();

  React.useEffect(() => {
    setCategory(pathname);
  }, [pathname])

  return (
    <div className={`${styles.container} animeLeft`}>
      <nav className={styles.subNavbar}>
        <NavLink to="delivery" activeClassName={styles.activeProducts}>Delivery</NavLink>
        <NavLink to="bolos" activeClassName={styles.activeProducts}>Bolos</NavLink>
        <NavLink to="sazonal" activeClassName={styles.activeProducts}>Sazonal</NavLink>
      </nav>
      {category==='/produtos/delivery' && <Delivery/>}
      {category==='/produtos/bolos' && <Cakes/>}
      {category==='/produtos/sazonal' && <Seasonal/>}
    </div>
  )
}

export default Products;