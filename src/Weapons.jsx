import React, { useEffect } from "react";
import "./weapons.css";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { CiDesktopMouse1 } from "react-icons/ci";
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
      <h1>Choose Weapon</h1>
      {guns?.map((gun) => (
        <div className="guns-card">
          <h2>{gun.displayName}.</h2>
          <img src={gun.displayIcon} />
          <div className="guns-stats">
            <p>Type: {gun?.category.split("::")[1]}</p>
            <p>Fire Rate: {gun?.weaponStats?.fireRate ?? "null"}</p>
            <p>Magazine Size: {gun?.weaponStats?.magazineSize ?? "null"}</p>
            <p>Reload Time: {gun?.weaponStats?.reloadTimeSeconds ?? "0"}s </p>
            <p>
              Wall Penetration:{" "}
              {gun?.weaponStats?.wallPenetration.split("::")[1] ?? "none"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Weapons;
