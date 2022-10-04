import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import hamburguer from '../Images/hamburguer.svg';
import hamburguerOpen from '../Images/hamburguer-aberto0.svg';
import logo from '../Images/logo-in8-dev.svg';

const HeaderResponse = () => {
  const { display, setDisplay } = useContext(AppContext);

  const clickHamburguer = () => {
    setDisplay('');
  };

  return(
    <header id="headerResponse">
      <img
        alt="hamburguer"
        id="hamburguer"
        src={ hamburguer }
        onClick={ clickHamburguer }
        width="30px"
      />
      <div id="headerOpen" style={{ display, opacity: '' }}>
        <img
          alt="hamburguerOpen"
          id="hamburguerOpen"
          src={ hamburguerOpen }
          width="30px"
        />
        <a
          className="headerTitles titlesHeaderResponse"
          href="#listPage"
        >lista</a>
        <a
          className="headerTitles titlesHeaderResponse"
          href="#aboutMePage"
        >sobre mim</a>
        <a
          className="headerTitles titlesHeaderResponse"
          href="#registrationComponent"
        >cadastro</a>
      </div>
      <img src={ logo } alt="logo" id="imgHeader" />
    </header>
  );
};

export default HeaderResponse;