// src/Components/InputField.js
import React from 'react';

const InputField = ({ label, value, onChange, type = 'number' }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          style={{ marginLeft: '10px' }}
        />
      </label>
    </div>
  );
};

export default InputField;
