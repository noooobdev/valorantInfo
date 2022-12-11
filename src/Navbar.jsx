import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="main-logo" to={"/"}>
        <h2>Valorant</h2>
      </Link>
      <div className="weapon-div">
        <Link to={"/Weapons"}>Arsenal</Link>
      </div>
      <div className="weapon-div">
        <Link to={"/Maps"}>Maps</Link>
      </div>
    </nav>
  );
}
export default Navbar;
