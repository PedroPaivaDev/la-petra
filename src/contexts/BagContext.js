import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const BagContext = React.createContext();

export const BagStorage = ({children}) => {
  const [bag, setBag] = useLocalStorage('bag', '');

  return (
    <BagContext.Provider value={[bag, setBag]}>
      {children}
    </BagContext.Provider>
  )
}