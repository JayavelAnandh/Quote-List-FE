import React from "react";

export default function Input({
  data,
  label,
  type,
  name,
  handleChange,
  min,
  max,
}) {
  return (
    <div>
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={data[name]}
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
        required
        {...(max ? { max } : {})}
        {...(min ? { min } : {})}
      />
    </div>
  );
}
