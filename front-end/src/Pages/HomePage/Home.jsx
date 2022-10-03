import React, { useContext } from 'react';
import Header from '../../Components/Header.jsx';
import HeaderResponse from '../../Components/HeaderResponse.jsx';
import AppContext from '../../Context/AppContext.jsx';
import './Home.css';

const Home = () => {
  const { display } = useContext(AppContext);

  return (
    <div id="homePage" style={{ opacity: display === 'none' ? '' : '60%' }}>
      <Header />
      <HeaderResponse />
      <div id="TitlesHome">
        <h1>ESTÁGIO</h1>
        <h2>PROVA DE SELEÇÃO</h2>
      </div>
    </div>
  );
};

export default Home;