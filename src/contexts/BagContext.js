import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const BagContext = React.createContext();

export const BagStorage = ({children}) => {
  const [bag, setBag] = useLocalStorage('bag', '');
  const [category, setCategory] = React.useState('delivery');

  return (
    <BagContext.Provider value={[bag, setBag, category, setCategory]}>
      {children}
    </BagContext.Provider>
  )
}