import React from 'react';
import styles from '../../../css/AuthCSS/register.module.css';


function TextArea({ name,placeholder,id,value,onChange }) {
  return (
    <>
     <form className={styles.registerForm}>
    <textarea
      name={name} // Name attribute for the textarea.
      placeholder={placeholder} // Placeholder for user guidance.
      id={id} // ID for the element.
      value={value}
      onChange={onChange} 
    />
      </form>
    </>
  )
}

export default TextArea;
