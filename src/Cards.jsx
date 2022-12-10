import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Cards({ agents }) {
  return (
    <div className="cards">
      {agents.map((agent) => (
        <Link
          to={"/" + agent.uuid}
          className="kard"
          style={{ textDecoration: "none" }}
        >
          <div
            className="main-card"
            style={{
              background: `black url(${agent.background}) no-repeat left`,
            }}
          >
            <img className="agent-logo" src={agent.fullPortrait} />
          </div>
          <h4 className="agent-name">{agent.displayName}</h4>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
