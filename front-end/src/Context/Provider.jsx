import React, { useState } from 'react';
import AppContext from './AppContext.jsx';

function Provider({ children }) {
  const [lastPeople, setLastPeople] = useState({
    id: 'Carregando',
    name: 'Carregando',
    email: 'Carregando',
    birthDate: 'Carregando',
    telephone: 'Carregando',   
  });
  const [registeredStatus, setRegisteredStatus] = useState(true); //Utilizado para fazer a atualização das informações da tabela
  
  const contextValue = {
    lastPeople,
    setLastPeople,
    registeredStatus,
    setRegisteredStatus,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
};

export default Provider;
