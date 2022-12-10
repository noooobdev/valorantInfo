import React, { useState, useEffect } from "react";
import "./agento.css";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";

function Agento({ agents, setAgents }) {
  let { agentId } = useParams();
  let navigate = useNavigate();
  const [oneAgent, setOneAgent] = useState([]);

  useEffect(() => {
    axios
      .get(`https://valorant-api.com/v1/agents/${agentId}`)
      .then((res) => setOneAgent(res.data.data));
  }, []);

  function agentVoice() {
    var audio = new Audio(oneAgent?.voiceLine?.mediaList[0].wave);
    audio.play();
  }

  return (
    <div className="agent-all">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </button>
      <div className="pic-title">
        <img
          className="agent-pic"
          src={oneAgent?.displayIcon}
          onClick={agentVoice}
        />

        <div
          className="title-desc"
          style={{
            background: `black url(${oneAgent?.background}) repeat-y right `,
          }}
        >
          <div className="non-bckground">
            <h1 className="agent-title">{oneAgent?.displayName}</h1>
            <div className="role-info">
              <span>
                <h3>{oneAgent?.role?.displayName}</h3>
                <p>{oneAgent?.role?.description}</p>
              </span>
              <img src={oneAgent?.role?.displayIcon} className="role-icon" />
            </div>
            <p>{oneAgent?.description}</p>
            <p style={{ color: "red" }}>{oneAgent?.developerName}</p>
          </div>
        </div>
      </div>
      <div className="agent-abilities">
        {oneAgent?.abilities?.map((e) => (
          <div className="ability1">
            <span>
              <h3>{e?.displayName}</h3>
              <p>{e?.description}</p>
            </span>
            <img src={e?.displayIcon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agento;
