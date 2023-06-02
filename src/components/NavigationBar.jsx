import React from "react";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <button className="button-1">
        <img src="/static/images/boton1.png" alt="" />
      </button>
      <button>
        <img src="/static/images/boton2.png" alt="" />
      </button>
      <button>
        <img src="/static/images/boton3.png" alt="" />
      </button>
      <button>
        <img src="/static/images/boton4.png" alt="" />
      </button>
    </div>
  );
};

export default NavigationBar;
