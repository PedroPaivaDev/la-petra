import React from 'react';
import styles from './InputRadio.module.css';

const InputRadio = ({options, state, setState, name, ...props}) => {
  return (
    <>
      {options.map(option => 
        <div className={styles.inputGroup} key={`${name + option}`}>
          <input 
            id={`${name + option}`}
            value={option}
            checked={state === option}
            onChange={({target}) => setState(target.value)}
            {...props}
          />
          <label htmlFor={`${name + option}`}>
            {option}
          </label>
        </div>
      )}
    </>
  )
}

export default InputRadio;