import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo-in8-dev.svg';

const Header = () => {
  return (
    <div id="headerComponent">
      <Link className="headerTitles" to="/">
        <img src={ logo } alt="logo" width="200px"/>
      </Link>
      <div id="linksHeader">
        <Link className="headerTitles" to="/registration">cadastro</Link>
        <Link className="headerTitles" to="/list">lista</Link>
        <Link className="headerTitles" to="/aboutme">sobre mim</Link>
      </div>
    </div>
  )
};

export default Header;