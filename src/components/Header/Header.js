import React from 'react';
import styles from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';

// import Logotipo from '../../assets/Logotipo.png';
// import {ReactComponent as Cake} from '../../assets/icons/cake.svg';
// import {ReactComponent as Cart} from '../../assets/icons/shopping-cart-simple.svg';

const Header = () => {

  const {pathname} = useLocation();
  // const navigate = useNavigate();

  // function handleNavigate() {
  //   if(pathname==="/") {
  //     navigate("/sobre")
  //   } else {
  //     navigate("/")
  //   }
  // }

  return (
    <header className={styles.header}>
      <NavLink className={styles.navLink} activeClassName={styles.activePage} to="/produtos">
        {/* <Cake className={styles.icon}/> */}
        Produtos
      </NavLink>
      {pathname!=="/" && <NavLink className={styles.navLink} to="/">Início</NavLink>}
      {/* <div className={styles.logo} onClick={handleNavigate}>
        <div className={styles.shadow}></div>
        <img src={Logotipo} height="80px" alt="Logotipo"/>
      </div> */}
      <NavLink className={styles.navLink} activeClassName={styles.activePage} to="/contato">
        {/* <Cart className={styles.icon}/> */}
        Comprar
      </NavLink>
    </header>
  )
}

export default Header;