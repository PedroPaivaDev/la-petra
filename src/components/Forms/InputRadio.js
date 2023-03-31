import React from 'react';
import styles from './InputRadio.module.css';

const InputRadio = ({option, state, setState, name, className, ...props}) => {
  return (
    <div className={styles.inputGroup} key={`${name + option}`}>
      <input
        id={`${name + option}`}
        value={name}
        checked={state === name}
        onChange={({target}) => setState(target.value)}
        type="radio"
        {...props}
      />
      <label htmlFor={`${name + option}`}>
        <span className={className}>R${option.toFixed(2)}</span>
      </label>
    </div>
  )
}

export default InputRadio;