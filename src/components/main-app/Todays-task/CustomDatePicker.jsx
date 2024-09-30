import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { styled } from "@mui/system";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }
`;

export default function CustomDatePicker({ selected, onSelect }) {
  return (
    <StyledDatePicker
      selected={selected}
      onChange={(date) => onSelect(date)}
      dateFormat="MMMM d, yyyy"
      showPopperArrow={false}
    />
  );
}
