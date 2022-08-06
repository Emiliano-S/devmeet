import { useState } from 'react';
import './App.css';
import './components/style/style.css';
import { CardContainer } from './components/CardContainer';
import { NavBar } from './components/NavBar';
import data from './data/db';

function App() {
  const [dbCard, setdbCard] = useState(data);

  return (
    <div className="App">
        <NavBar />
        <CardContainer data={dbCard}/>
    </div>
  );
}

export default App;
