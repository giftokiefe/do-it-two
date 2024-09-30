import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import BiggerSide from "./BiggerSide/BiggerSide";
import "./Mainapp.css";

const Mainapp = () => {
  const [activeView, setActiveView] = useState("today");

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="main-app">
      <Sidebar
        className="sidebar"
        onViewChange={handleViewChange}
        activeView={activeView}
      />
      <BiggerSide className="bigger-side" activeView={activeView} />
    </div>
  );
};

export default Mainapp;
