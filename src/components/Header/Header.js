import React from 'react';
import styles from './Header.module.css';
import Logotipo from '../../assets/Logotipo.png';

const Header = () => {
  return (
    <div className={styles.header}>
    <img src={Logotipo} height="200px" alt="Logotipo"/>      
    </div>
  )
}

export default Header;