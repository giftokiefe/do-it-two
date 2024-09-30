import "./Todo.css";
import ToggleIcon from "./ToggleIcon";

const Todo = ({ task, time }) => {
  return (
    <div className="Todo">
      <p className="p-tag">{task}</p>
      {time && <p className="time-tag">{time.format("hh:mm A")}</p>}{" "}
      {/* Display the selected time */}
      <div className="icon-container">
        <ToggleIcon />
      </div>
    </div>
  );
};

export default Todo;
