import React from "react";
import "./Scheduled-tasks.css";

const ScheduledTasks = ({ selectedDate }) => {
  return (
    <div className="scheduledtasks">
      <h2>{selectedDate.toDateString()}</h2>
    </div>
  );
};

export default ScheduledTasks;
