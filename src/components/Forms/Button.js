import React from 'react';
import styles from './Button.module.css';

const Button = ({children, submitError, ...props}) => {
  return (
    <div className={styles.container}>
      {submitError && <p className={styles.error}>Preencha corretamente todos os campos</p>}
      <button className={styles.button} {...props}>{children}</button>
    </div>
  )
}

export default Button;