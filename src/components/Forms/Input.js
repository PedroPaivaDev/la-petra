import React from 'react';
import styles from './Input.module.css';

const Input = ({label, type, name, value, placeholder, onChange, error, onBlur}) => {
  return <div className={styles.wrapper}>
    <label htmlFor={name} className={styles.label}>{label}</label>
    <input 
      id={name} 
      name={name} 
      className={styles.input} 
      type={type} 
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <h6 className={styles.error}>{error}</h6>}
  </div>
}

export default Input;