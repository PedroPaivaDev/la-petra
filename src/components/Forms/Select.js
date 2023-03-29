import React from 'react';
import styles from './Select.module.css';

const Select = ({initial, options, selectedOption, setSelectedOption, className, label, value}) => {

  function handleChange(event) {
    setSelectedOption(event.target.value)
  }

  return (
    <div className={`${className} ${styles.inputGroup}`}>
      <label htmlFor={label}>{label}</label>
      <select id={label} value={selectedOption} onChange={handleChange} className={styles.select}>
        <option value="" disabled>{initial}</option>
        {options.map((option, index) => (
          value ?
          <option key={option} value={value[index]}>{option}</option> :
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Select;