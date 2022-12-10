import React, { useEffect } from "react";
import "./weapons.css";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";

function Weapons({ guns, setGuns }) {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((res) => setGuns(res.data.data));
  }, []);
  return (
    <div className="weapons">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </button>
      {guns?.map((gun) => (
        <div className="guns-card">
          <img src={gun.displayIcon} />

          <h2>{gun.displayName}</h2>
          <p>{gun.category.split("::")[1]}</p>
        </div>
      ))}
    </div>
  );
}

export default Weapons;
