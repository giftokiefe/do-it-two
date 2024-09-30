import React from "react";
import "./Sidebar.css";
import { assets } from "../../../assets/assets";
import { FiCalendar } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { TbCalendarCheck } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = ({ onViewChange, activeView }) => {
  return (
    <div className="sidebar">
      <div className="header-section">
        <img
          src={assets.user_icon}
          alt="profile-picture"
          className="profile-picture"
        />
        <div className="header-text">
          <p className="do-it">Do-it</p>
          <p className="user-name">
            <span>Okiefe</span> <span>Gift</span>
          </p>
        </div>
      </div>

      <div className="menu">
        <div className="menu-header" onClick={() => onViewChange("today")}>
          <FiCalendar
            className="sidebar-icon"
            style={{ color: activeView === "today" ? "#a18aff" : "inherit" }}
          />
          <p>Today's tasks</p>
        </div>

        <div className="menu-list">
          <div className="filter-options">
            <GoDotFill style={{ color: "#FD99AF", fontSize: "25px" }} />
            <p>Personal</p>
          </div>

          <div className="filter-options">
            <GoDotFill style={{ color: "#3FD4F4", fontSize: "25px" }} />
            <p>Freelance</p>
          </div>

          <div className="filter-options">
            <GoDotFill style={{ color: "#FAC608", fontSize: "25px" }} />
            <p>Work</p>
          </div>
        </div>
      </div>

      <div className="sidebar-nav" onClick={() => onViewChange("scheduled")}>
        <TbCalendarCheck
          className="sidebar-icon"
          style={{ color: activeView === "scheduled" ? "#a18aff" : "inherit" }}
        />
        <p>Scheduled tasks</p>
      </div>

      <div className="sidebar-nav" onClick={() => onViewChange("settings")}>
        <IoSettingsOutline
          className="sidebar-icon"
          style={{ color: activeView === "settings" ? "#a18aff" : "inherit" }}
        />
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
