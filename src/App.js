import { useState } from 'react';
import './App.css';
import { CardContainer } from './components/CardContainer';
import LandingPage from './components/LandingPage';
import { NavBar } from './components/NavBar';
import data from './data/db';

function App() {
  const [dbCard, setdbCard] = useState(data);

  return (
    <div className="App">
        <LandingPage />
        <NavBar />
        <CardContainer data={dbCard}/>
    </div>
  );
}

export default App;
