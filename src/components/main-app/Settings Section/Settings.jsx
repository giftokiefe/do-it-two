import React from "react";
import "./Settings.css";
import { CgProfile } from "react-icons/cg";
import { MdArrowForwardIos } from "react-icons/md";
import { BiNotification } from "react-icons/bi";
import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";

const Settings = () => {
  return (
    <div className="card">
      <div className="settings-title">
        <CgProfile />
        <p>Profile</p>
      </div>

      <div className="settings-menu">
        <div className="settings-option">
          <p>Edit Profile</p>
          <MdArrowForwardIos />
        </div>

        <div className="settings-option">
          <p>Change Password</p>
          <MdArrowForwardIos />
        </div>

        <div className="settings-option">
          <p>Privacy</p>
          <MdArrowForwardIos />
        </div>
      </div>

      <div className="settings-title">
        <BiNotification />
        <p>Notification</p>
      </div>

      <div className="settings-menu">
        <div className="settings-option">
          <p>Notifications</p>
          <MdToggleOn
            style={{ color: "#a18aff", fontSize: "45px", marginRight: "10px" }}
          />
        </div>

        <div className="settings-option">
          <p>Tasks notifications</p>
          <MdToggleOff
            style={{ color: "grey", fontSize: "45px", marginRight: "10px" }}
          />
        </div>
      </div>

      <div className="settings-title">
        <CiCircleMore />
        <p>More</p>
      </div>

      <div className="settings-menu">
        <div className="settings-option">
          <p>Language</p>
          <MdArrowForwardIos />
        </div>

        <div className="settings-option">
          <p>Country</p>
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Settings;
