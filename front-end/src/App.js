import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './styled.css';

import Home from './Pages/HomePage/Home.jsx';
import AboutMe from './Pages/AboutMePage/AboutMe';
import List from './Pages/ListPage/List';
import Registration from './Pages/RegistrationPage/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/aboutme" element={ <AboutMe /> } />
        <Route path="/list" element={ <List /> } />
        <Route path="/registration" element={ <Registration /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;