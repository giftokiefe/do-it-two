import React from "react";
import "./Scheduled-tasks.css";

const ScheduledTasks = ({ selectedDate }) => {
  return (
    <div className="scheduledtasks">
      <h2>{selectedDate.toDateString()}</h2>
      <span>{/* display todo attached to the above date */}</span>
    </div>
  );
};

export default ScheduledTasks;
