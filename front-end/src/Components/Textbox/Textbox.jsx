import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import "./Textbox.css";
import React from "react";

const Textbox = ({ value, placeholder, type, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="custom-textbox"
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Textbox;
