import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agento from "./Agento";
import Weapons from "./Weapons";

function App() {
  const [agents, setAgents] = useState([]);
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((res) => setAgents(res.data.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((res) => setGuns(res.data.data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Cards agents={agents} />} />
          <Route path=":agentId" element={<Agento />} />
          <Route exact path="/weapons" element={<Weapons guns={guns} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
