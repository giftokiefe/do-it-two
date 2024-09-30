import React, { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoCircle } from "react-icons/go";

function ToggleIcon({
  activeIcon = (
    <IoIosCheckmarkCircleOutline size={35} style={{ color: "#a18aff" }} />
  ),
  inactiveIcon = <GoCircle size={35} style={{ color: "#ede4e4" }} />,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      {isActive ? activeIcon : inactiveIcon}
    </div>
  );
}

export default ToggleIcon;
