import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import "./Maps.css";

function Maps({ maps, setMaps }) {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/maps")
      .then((res) => setMaps(res.data.data));
  }, []);
  return (
    <div className="maps">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </button>
      <div className="cards-map">
        {maps?.map((map) => (
          <div className="maps-card">
            <h1>{map.displayName}</h1>
            <img src={map?.splash} />
            <img src={map?.displayIcon} />
            <p>{map?.coordinates}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Maps;
