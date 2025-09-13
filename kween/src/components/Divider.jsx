import React from "react";
import { FaCrown } from "react-icons/fa";
import "../styles/Divider.css";

const Divider = () => {
  return (
    <div className="section-divider">
      <span className="divider-icon">
        <FaCrown />
      </span>
    </div>
  );
};

export default Divider;
