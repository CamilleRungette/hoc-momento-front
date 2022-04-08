import React from "react";
import {Company, Home, Agenda, Show, CulturalActions} from "./_index.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const MainApp = () => {


  return(
    <BrowserRouter className="main-app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/compagnie" element={<Company/>} />
        <Route path="/agenda" element={<Agenda/>} />
        <Route path="/spectacle/:id" element={<Show/>} />
        <Route path="/action-culturelle/:id" element={<CulturalActions/>} />
      </Routes>

    </BrowserRouter>
  )
};

export default MainApp;