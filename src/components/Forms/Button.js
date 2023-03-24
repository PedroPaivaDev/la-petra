import React from 'react';
import styles from './Button.module.css';

const Button = ({children, submitError, submitSucess, ...props}) => {
  return (
    <div className={styles.container}>
      {submitError && <h5 className={styles.error}>Verifique os campos</h5>}
      {submitSucess && <h5 className={styles.sucess}>Enviado com sucesso!</h5>}
      <button className={styles.button} {...props}>{children}</button>
    </div>
  )
}

export default Button;