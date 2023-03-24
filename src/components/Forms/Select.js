import React from 'react';

const Select = ({initial, options, selectedOption, setSelectedOption}) => {

  function handleChange(event) {
    setSelectedOption(event.target.value)
  }

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="" disabled>{initial}</option>
      {options.map(option =>
        <option key={option} value={option}>{option}</option>
      )}
    </select>
  )
}

export default Select;