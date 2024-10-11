import React, { useState } from "react";
import { SlClock } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Modal, Box, Button, Typography } from "@mui/material";

import CustomTimePicker from "./CustomTimePicker";
import CustomDatePicker from "./CustomDatePicker";
import "./TodoForm.css";

const TodoForm = ({ addTodo, selectedDate, onDateChange }) => {
  const [value, setValue] = useState("");
  const [time, setTime] = useState(null);
  const [openTime, setOpenTime] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleOpenTime = () => setOpenTime(true);
  const handleCloseTime = () => setOpenTime(false);
  const handleOpenCalendar = () => setOpenCalendar(true);
  const handleCloseCalendar = () => setOpenCalendar(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      const newTodo = {
        task: value,
        time: time,
        date: selectedDate.toISOString(),
      };
      addTodo(newTodo);
      setValue("");
      setTime(null);
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <div className="todoform-parent">
      <div className="todoform-parent-header">
        <h2 className="main-focus">Today's main focus</h2>
        <h1 className="responsive-header">Design team meeting</h1>
      </div>

      <form className="todoform" onSubmit={handleSubmit}>
        <div className="task-assigner">
          <GoDotFill
            className="peronal-assigner"
            style={{ color: "#FD99AF" }}
          />
          <GoDotFill
            className="freelance-assigner"
            style={{ color: "#3FD4F4" }}
          />
          <GoDotFill className="work-assigner" style={{ color: "#FAC608" }} />
        </div>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="What's your next task?"
          onKeyDown={handleEnterPress}
          onChange={handleInputChange}
        />
        <div className="input-icon">
          <SlClock className="clock-icon" onClick={handleOpenTime} />
          <IoCalendarClearOutline onClick={handleOpenCalendar} />
        </div>
      </form>

      <Modal open={openTime} onClose={handleCloseTime}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <Typography variant="h6" component="h2" mb={2}>
            Select Time
          </Typography>
          <CustomTimePicker value={time} onChange={handleTimeChange} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseTime}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      <Modal open={openCalendar} onClose={handleCloseCalendar}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <CustomDatePicker selected={selectedDate} onSelect={onDateChange} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseCalendar}
            sx={{ mt: 2, width: "100%" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default TodoForm;
