import { useState } from "react";
import "./App.css";
import { CardContainer } from "./pages/CardContainer";
import LandingPage from "./pages/LandingPage";
import { NavBar } from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import Login from "./pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Filterby } from "./pages/Filterby";
import { AddPhoto } from "./pages/AddPhoto";
import { Skills } from "./pages/Skills";
import { WorkExperiences } from "./pages/WorkExperiences";
import { LinksLanguages } from "./pages/LinksLanguages";
import Settings from "./pages/Settings";
import { ProfileSettings } from "./components/ProfileSettings";
import { NavBarBottom } from "./components/NavBarBottom";

const userSignUp = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birth_date: "",
  sex: "",
  phone_number: "",
  city: "",
  job_type: "",
  role: "",
  bio: "",
  skills: [],
  work_place: [],
  work_experience: [],
  languages: [],
  notifications: [],
  appointments: [],
  links: [
    {
      linkedin: "",
      github: "",
      website: "",
    },
  ],
  cv: "",
  profile_picture: "",
  is_profile_visible: true,
};

function App({ user }) {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar back options />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp/company" element={<Form company />} />
          <Route path="/card" element={<CardContainer />} />
          <Route
            path="/signUp/user"
            element={<Form user userArr={userSignUp} />}
          />
          <Route path="/signUp/regUser" element={<Login registration user />} />
          <Route path="/signUp/regCompany" element={<Login registration />} />
          <Route path="/filterBy" element={<Filterby />} />
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
          <Route
            path="/ProfileSettings"
            element={<ProfileSettings id user />}
          />
        </Routes>
        {/*
        <CardContainer data={dbCard}/>

        */}
        <NavBarBottom />
      </BrowserRouter>
    </div>
  );
}

export default App;
