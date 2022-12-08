import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agento from "./Agento";

function App() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((res) => setAgents(res.data.data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards agents={agents} />} />
          <Route path=":agentId" element={<Agento />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
