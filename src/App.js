import { useState } from 'react';
import './App.css';
import { CardContainer } from './components/CardContainer';
import LandingPage from './components/LandingPage';
import { NavBar } from './components/NavBar';
import SignUp from './components/SignUp';
import Form from './components/Form';
import data from './data/db';

function App() {
  const [dbCard, setdbCard] = useState(data);

  return (
    <div className="App">
        <LandingPage />
        <SignUp />
        <NavBar options back={'#'}/>
        <CardContainer data={dbCard}/>
        <Form/>
    </div>
  );
}

export default App;
