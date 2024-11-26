import React from "react";


function Input({ name, placeholder, id, type, value, onChange }) {
  return (
    <input
      name={name} // Sets the name attribute
      placeholder={placeholder} // Sets the placeholder
      id={id} // Sets the ID
      type={type} // Specifies the type (e.g., text, email, password)
      value={value} // Binds the value
      onChange={onChange} // Handles the onChange event
    />
  );
}

export default Input;
