import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Valorant</h2>
      <div className="weapon-div">
        <Link to={"/Weapons"}>Arsenal</Link>
      </div>
    </nav>
  );
}
export default Navbar;
