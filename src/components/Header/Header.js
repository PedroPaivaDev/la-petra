import React from 'react';
import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

import Logotipo from '../../assets/Logotipo.png';
import Open from '../Open/Open';
import Cart from '../Cart/Cart';

const Header = () => {

  const {pathname} = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <Open/>
      {pathname!=="/" &&
        <div className={styles.logo} onClick={() => navigate("/")}>
          <div className={styles.shadow}></div>
          <img src={Logotipo} height="80px" alt="Logotipo"/>
        </div>
      }
      <Cart/>
    </div>
  )
}

export default Header;