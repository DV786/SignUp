import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FanSignUp from "./Componets/FanSignUp";
import TalentSignUp from "./Componets/TalentSignUp";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<FanSignUp />} />
        <Route path="/TalentSignUp" exact element={<TalentSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
