import React, { useState } from "react";
import TodaysTask from "../Todays-task/TodaysTask";
import Settings from "../Settings Section/Settings";
import ScheduledTasks from "../Scheduled-tasks/ScheduledTasks";

const BiggerSide = ({ activeView }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="bigger-side">
      {activeView === "today" ? (
        <TodaysTask
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
      ) : activeView === "settings" ? (
        <Settings />
      ) : activeView === "scheduled" ? (
        <ScheduledTasks selectedDate={selectedDate} />
      ) : null}
    </div>
  );
};

export default BiggerSide;
