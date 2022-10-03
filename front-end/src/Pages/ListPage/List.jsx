import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { handleFetchGET } from '../../Services/ApiRequests';
import topoPage from '../../Images/topo-pag.svg';
import AppContext from '../../Context/AppContext.jsx';

import './List.css';

function List() {
  const { setLastPeople, registeredStatus } = useContext(AppContext); //Componente para enviar a última pessoa para o sobre mim!
  const [peoples, setPeoples] = useState([{
    id: 1,
    name: 'carregando',
    email: 'carregando',
    birthDate: 'carregando',
    telephone: 'carregando',
  }]);

  useEffect(() => {  //Está sendo populado a tabela de pessoas registradas no inicio da renderização
    const getPeoples = async() => {
      try {
        const response = await handleFetchGET();
        if(response.length > 4) {
          const defineQuantity = response.slice(response.length - 4); // Está sendo definido o limite de pessoas na tabela
          setPeoples(defineQuantity);
        } else {
          setPeoples(response);
        }
        setLastPeople(response[response.length - 1]); // Enviando a ultima pessoa para o sobre mim
      } catch (e) {
        const errorFormate = [{
          id: 1,
          name: e.message,
          email: e.message,
          birthDate: e.message,
          telephone: e.message,
        }];
        setLastPeople(errorFormate);
        setPeoples(errorFormate);
      };
    };
    getPeoples();
  }, [setLastPeople, registeredStatus]);

  return (
    <div id="listPage">
      <h1>LISTA DE CADASTRO</h1>
      <table id="tableList">
        <thead>
          <th></th>
          <th>NOME</th>
          <th>E-MAIL</th>
          <th>NASCIMENTO</th>
          <th className="lastColumn">TELEFONE</th>
        </thead>
        {
          peoples.map((people, index) => {
            return (
              <tbody key={ people.id }>
                <td className={index === (peoples.length - 1) ? 'lastLine numberList' : 'numberList'}>{ people.id }</td>
                <td className={index === (peoples.length - 1) ? 'lastLine' : ''}>{ people.name }</td>
                <td className={index === (peoples.length - 1) ? 'lastLine' : ''}>{ people.email }</td>
                <td className={index === (peoples.length - 1) ? 'lastLine' : ''}>{ people.birthDate }</td>
                <td className={index === (peoples.length - 1) ? 'lastColumn lastLine' : 'lastColumn'}>
                  { people.telephone }
                </td>
              </tbody>
            )
          })
        }
      </table>
      <a href="#headerComponent"><img src={ topoPage } alt="logo" id="topoPageList" /></a>
    </div>
  );
};

export default List;