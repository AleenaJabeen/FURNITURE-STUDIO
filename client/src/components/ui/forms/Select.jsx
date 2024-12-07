import React from 'react';
import styles from '../../../css/AuthCSS/register.module.css';


function Select({ getControlItem, value }) {
  const styles={
    width:"60px"
  }
  return (
    <>
<select name={getControlItem.name} // Name attribute for the textarea.
      placeholder={getControlItem.placeholder} // Placeholder for user guidance.
      id={getControlItem.id} // ID for the element.
      value={value}
      onValueChange={handleChange}
      style={styles}>
    <option value="hello"></option>
</select>
      
    </>
  )
}

export default Select
