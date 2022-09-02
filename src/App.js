import { useState } from 'react';
import './App.css';
import { CardContainer } from './components/CardContainer';
import LandingPage from './components/LandingPage';
import { NavBar } from './components/NavBar';
import SignUp from './components/SignUp';
import Form from './components/Form';
import data from './data/db';
import Login from './components/Login';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Filterby } from './components/Filterby';




function App() {
  const [dbCard, setdbCard] = useState(data);


  return (
    <div className="App">

      <BrowserRouter>
      <NavBar back/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/signUp/company' element={<Form company/>} />
        <Route path='/signUp/user' element={<Form user/>} />
        <Route path='/signUp/regUser' element={<Login registration user/>} />
        <Route path='/signUp/regCompany' element={<Login registration/>} />
        <Route path='/signUp/FilterBy' element={<Filterby/>}/>
      </Routes>
        {/*
        <CardContainer data={dbCard}/>

        */}
        </BrowserRouter>
    </div>
  );
}

export default App;
