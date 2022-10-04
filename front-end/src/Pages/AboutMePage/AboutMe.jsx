import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext.jsx';

import './AboutMe.css';

function AboutMe() {
  const { lastPeople } = useContext(AppContext);

  return (
    <div id="aboutMePage">
      <h2>{ lastPeople.name }</h2>
      <h2>{ lastPeople.email }</h2>
      <h2>{ lastPeople.telephone }</h2>
      <h2>Faculdade de Belo Horizonte</h2>
    </div>
  );
};

export default AboutMe;