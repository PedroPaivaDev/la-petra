import React from 'react';
import styles from './Button.module.css';

const Button = ({children, submitError, submitSucess, ...props}) => {
  return (
    <div className={styles.container}>
      {submitError && <h6 className={styles.error}>Verifique os campos</h6>}
      {submitSucess && <h6 className={styles.sucess}>Enviado com sucesso!</h6>}
      <button className={styles.button} {...props}>{children}</button>
    </div>
  )
}

export default Button;