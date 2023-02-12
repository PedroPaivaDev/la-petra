import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <p>Open</p>      
      <p>Cart</p>
    </div>
  )
}

export default Header;