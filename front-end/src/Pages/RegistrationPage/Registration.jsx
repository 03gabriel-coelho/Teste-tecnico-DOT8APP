import React, { useState } from 'react';
import './Registration.css';
import Header from '../../Components/Header.jsx';
import { handleFetchPOST } from '../../Services/ApiRequests.jsx';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [BDFormate, setBDFormate] = useState('');  // Este é o ultimo valor formatado do birthDate
  const [telephone, setTelephone] = useState('');
  const [loading, setLoading] = useState(false);

  const getFormApi = async () => {  //Função utilizada para enviar o formulario no banco de dados
    setLoading(true);

    const body = {
      name,
      email,
      birthDate: BDFormate,
      telephone,
    };
    
    try {
      const response = await handleFetchPOST(body);
      console.log(response, 'deu');
      alert(response.message);
    } catch (e) {
      alert(e.message.message)
    }

    setLoading(false);
  };

  const telephoneFormate = ({ target: { value } }) => { // Função utilizada para formatar o número de telefone
    const formate = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');

    setTelephone(formate);
  };

  const birthDateFormate = ({ target: { value } }) => { // Função utilizada para formatar a data de nascimento
    const formate = value.split('-').reverse().join('/');

    setBDFormate(formate);

    if(value.length > 10) { // Evitando que o valor da data ultrapasse o número do ano
      setBirthDate(birthDate);
    } else {
      setBirthDate(value);
    }
  };

  return (
    <div>
    <Header />
    <div id="registrationComponent">
      <h2>CADASTRO</h2>
      <form>
        <label htmlFor="nameForm">
          Nome
          <input
            className="inputForm nameForm"
            type="text"
            placeholder="Digite seu nome aqui"
            onChange={ ({target}) => setName(target.value) }
            value={ name }
          />
        </label>
        <label htmlFor="emailForm">
          E-mail
          <input
            className="inputForm emailForm"
            type="text"
            placeholder="Digite seu email aqui"
            onChange={ ({target}) => setEmail(target.value) }
            value={ email }
          />
        </label>
        <label htmlFor="birthDateForm">
          Nascimento
          <input
            className="inputForm birthDateForm"
            type="date"
            placeholder="Digite sua data de nascimento aqui"
            onChange={ birthDateFormate }
            value={ birthDate }
          />
        </label>
        <label htmlFor="inputForm telephoneForm">
          Telefone
          <input
            className="inputForm telephoneForm"
            type="tel"
            placeholder="Digite seu telefone aqui"
            onChange={ telephoneFormate }
            value={ telephone }
          />
        </label>
        {
          loading === false ? (
            <button
              type="button"
              id="buttonForm"
              onClick={getFormApi}
            >CADASTRAR</button>
          ) : (
            <button
              type="button"
              id="buttonForm"
              disabled="true"
            >CARREGANDO</button>
          )
        }
      </form>
    </div>
    </div>
  )
};

export default Registration;