import React from 'react';


function Select({ getControlItem, value }) {
  return (
    <>
<select name={getControlItem.name} // Name attribute for the textarea.
      placeholder={getControlItem.placeholder} // Placeholder for user guidance.
      id={getControlItem.id} // ID for the element.
      value={value}
      onValueChange={handleChange} >
    <option value="hello"></option>
</select>
      
    </>
  )
}

export default Select
