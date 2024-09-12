import React from 'react';

export default function Input({ label, value, onChange, placeholder }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}