import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({option, state, setState, name, className, label, ...props}) => {
  return (
    <div className={styles.inputGroup} key={`${name + option}`}>
      <input
        id={`${name + option}`}
        value={option}
        checked={state === option}
        onChange={({target}) => target.checked ? setState(Boolean(target.value)) : setState(false)}
        type="checkbox"
        {...props}
      />
      <label htmlFor={`${name + option}`}>{label}</label>
    </div>
  )
}

export default Checkbox;