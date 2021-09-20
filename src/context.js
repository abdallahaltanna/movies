import React, { useContext, useState } from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { isLoading, error, data } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, data, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
