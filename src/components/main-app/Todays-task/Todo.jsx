import "./Todo.css";
import ToggleIcon from "./ToggleIcon";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({ id, task, time, onDelete }) => {
  const formatTime = (timeString) => {
    if (!timeString) return "";

    // Check if timeString is already in HH:MM format
    if (/^\d{2}:\d{2}$/.test(timeString)) {
      return timeString;
    }

    // If it's a Date object or ISO string, format it
    const timeDate = new Date(timeString);
    if (!isNaN(timeDate.getTime())) {
      return timeDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // If we can't parse it, return the original string
    return timeString;
  };

  const formatDate = (dateString) => {
    const taskDate = new Date(dateString);
    return taskDate.toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="Todo">
      <p className="p-tag">{task}</p>
      {time && <span className="time-tag">{formatTime(time)}</span>}
      {/* Display the selected time */}
      <div className="icon-container">
        <ToggleIcon />
        <AiOutlineDelete
          onClick={() => onDelete(id)}
          size={35}
          style={{ color: "#a18aff" }}
        />
      </div>
    </div>
  );
};

export default Todo;
