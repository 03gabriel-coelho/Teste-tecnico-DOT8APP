import React, { useContext } from 'react';
import topoPage from '../../Images/topo-pag.svg';
import Table from './Components/Table';
import TableResponse from './Components/TableResponse';
import { useEffect, useState } from "react";
import { handleFetchGET } from "../../Services/ApiRequests";
import AppContext from "../../Context/AppContext.jsx";

import './List.css';

function List() {
  const { setLastPeople, registeredStatus } = useContext(AppContext); //Componente para enviar a última pessoa para o sobre mim!
  const [peoples, setPeoples] = useState([
    {
      id: 1,
      name: 'carregando',
      email: 'carregando',
      birthDate: 'carregando',
      telephone: 'carregando',
    },
  ]);

  useEffect(() => {
    //Está sendo populado a tabela de pessoas registradas no inicio da renderização
    const getPeoples = async () => {
      try {
        const response = await handleFetchGET();
        if (response.length > 4 && typeof response !== 'string') {
          const defineQuantity = response.slice(response.length - 4); // Está sendo definido o limite de pessoas na tabela
          setPeoples(defineQuantity);
        } else if (response && response !== [] && typeof response !== 'string') {
          setPeoples(response);
        }
        setLastPeople(response[response.length - 1]); // Enviando a ultima pessoa para o sobre mim
      } catch (e) {
        const errorFormate = [
          {
            id: 1,
            name: '',
            email: 'Erro: ',
            birthDate: e.message,
            telephone: '',
          },
        ];
        setLastPeople(errorFormate);
        setPeoples(errorFormate);
      }
    };
    getPeoples();
  }, [setLastPeople, registeredStatus]);

  console.log(peoples, 'peoples');

  return (
    <div id="listPage">
      <h1>LISTA DE CADASTRO</h1>
      <Table peoples={peoples} />
      <TableResponse peoples={peoples} />
      <a href="#homePage"><img src={ topoPage } alt="logo" id="topoPageList" /></a>
    </div>
  );
};

export default List;