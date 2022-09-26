import { useState } from "react";
import "./App.css";
import { CardContainer } from "./pages/CardContainer";
import LandingPage from "./pages/LandingPage";
import { NavBar } from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import data from "./data/db";
import Login from "./pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Filterby } from "./pages/Filterby";
import { AddPhoto } from "./pages/AddPhoto";
import { Skills } from "./pages/Skills";
import { WorkExperiences } from "./pages/WorkExperiences";
import { LinksLanguages } from "./pages/LinksLanguages";
import Settings from "./pages/Settings";

const userSingUp = {
  nomeCognome: "",
  dataNascita: "",
  sesso: "",
  recTel: "",
  citta: "",
  tipologiaLavoro: "",
  qualifica: "",
  cv: "",
  bio: "",
  skills: [],
  sedeLavoro: [],
  esperienzeLavorative: [],
  link: {},
  lingue: [],
  foto: "",
};

function App() {
  const [dbCard, setdbCard] = useState(data);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar back />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp/company" element={<Form company />} />
          <Route
            path="/signUp/user"
            element={<Form user userArr={userSingUp} />}
          />
          <Route path="/signUp/regUser" element={<Login registration user />} />
          <Route path="/signUp/regCompany" element={<Login registration />} />
          <Route path="/FilterBy" element={<Filterby />} />
          <Route path="/singUp/regUser/skills" element={<Skills />} />
          <Route
            path="/singUp/regUser/workExperiences"
            element={<WorkExperiences />}
          />
          <Route
            path="/singUp/regUser/linksLanguages"
            element={<LinksLanguages />}
          />
          <Route
            path="/signUp/regUser/addPhoto"
            element={<AddPhoto registration user />}
          />
          <Route
            path="/signUp/regCompany/addLogo"
            element={<AddPhoto registration company />}
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {/*
        <CardContainer data={dbCard}/>

        */}
      </BrowserRouter>
    </div>
  );
}

export default App;
