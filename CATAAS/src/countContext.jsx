import { useContext, createContext, useState } from 'react';

export const CountContext = createContext({
  count: {
    countValue:0
  },
  setCount: () => {},
});

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState({
    countValue:0
  });

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCountContext = () => {
  return useContext(CountContext);
};