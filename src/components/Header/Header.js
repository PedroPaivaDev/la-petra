import React from 'react';
import styles from './Header.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import Logotipo from '../../assets/Logotipo.png';
import {ReactComponent as Cake} from '../../assets/icons/cake.svg';
import {ReactComponent as Bag} from '../../assets/icons/bag.svg';
import { BagContext } from '../../contexts/BagContext';

const Header = () => {
  const [bag] = React.useContext(BagContext);

  const {pathname} = useLocation();
  const navigate = useNavigate();
  
  function handleNavigateHome() {
    if(pathname==="/") {
      navigate("/sobre")
    } else {
      navigate("/")
    }
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink className={styles.navLink} activeClassName={styles.activePage} to="/produtos">
          <Cake className={styles.icon}/>
          Produtos
        </NavLink>

        <div className={styles.logo} onClick={handleNavigateHome}>
          <div className={styles.shadow}></div>
          <img src={Logotipo} height="80px" alt="Logotipo"/>
        </div>

        <NavLink className={styles.navLink} activeClassName={styles.activePage} to='order'>
          {Object.keys(bag).length!==0 && <span className={styles.bagCount}>{Object.keys(bag).length}</span>}
          <Bag className={styles.icon}/>
          Comprar
        </NavLink>
      </div>
    </header>
  )
}

export default Header;