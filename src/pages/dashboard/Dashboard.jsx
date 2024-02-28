import React, { useState } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [isClosed, setIsClosed] = useState(false);
  const toggleMenu = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className={`_main ${isClosed ? "close" : ""}`} id="main">
      <div class="sidebar"></div>
      <div class="content">
        <header>
          <i class="fas fa-bars" id="menu" onClick={toggleMenu}>
            |||
          </i>
          <div class="header-logo">Dashboard</div>
        </header>
      </div>
    </div>
  );
}
