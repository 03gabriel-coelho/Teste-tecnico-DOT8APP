import { useContext } from 'react';
import AppContext from './Context/AppContext.jsx';
import Home from './Pages/HomePage/Home.jsx';
import AboutMe from './Pages/AboutMePage/AboutMe';
import List from './Pages/ListPage/List';
import Registration from './Pages/RegistrationPage/Registration';

function App() {
  const { setDisplay } = useContext(AppContext);

  const clickHamburguerClose = ({ target }) => {
    if(target.id !== 'hamburguer') setDisplay('none');
  }

  return (
    <div onClick={ clickHamburguerClose }>
      <Home />
      <Registration />
      <List />
      <AboutMe />
    </div>
  );
}

export default App;