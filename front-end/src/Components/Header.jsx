import React from 'react';
import logo from '../Images/logo-in8-dev.svg';

const Header = () => {
  return (
    <header id="headerComponent">
      <img src={ logo } alt="logo" id="imgHeader" />
      <div id="linksHeader">
        <a className="headerTitles" href="#registrationComponent">cadastro</a>
        <li>
          <a className="headerTitles" href="#listPage">lista</a>
        </li>
        <li>
          <a className="headerTitles" href="#aboutMePage">sobre mim</a>
        </li>
      </div>
    </header>
  )
};

export default Header;