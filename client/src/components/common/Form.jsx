import React from "react";
import Input from '../ui/forms/Input';
import styles from '../../css/AuthCSS/register.module.css'

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  // Function to render different input elements based on the `componentType` property
  function renderInputsByComponentType(getControlItem) {
    let element = null; // Initialize the element variable to hold the JSX for the input.
    const value = formData[getControlItem.name] || "";

    // Use a switch statement to determine the type of form control to render.
    switch (getControlItem.componentType) {
      case "input": // For a standard input field
        element = (
          <Input
            name={getControlItem.name} // Sets the `name` attribute.
            placeholder={getControlItem.placeholder} // Sets a placeholder text.
            id={getControlItem.name} // Uses the name as the ID.
            type={getControlItem.type} // Specifies the input type (e.g., text, email).
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      case "select": // For a dropdown or select field.
         element = (
          <select
          value={formData[getControlItem.name] || ""} // Ensure value is from formData and has a default.
          placeholder={getControlItem.placeholder} // Placeholder for user guidance.
          id={getControlItem.id}
          onChange={(event) =>
            setFormData({
              ...formData,
              [getControlItem.name]: event.target.value, // Update the correct field in formData.
            })
          }
        >
          {/* Map through the options array to render individual `option` elements */}
          {getControlItem.options && getControlItem.options.length > 0
            ? getControlItem.options.map((optionItem) => (
                <option
                  key={optionItem.id} // Unique key for each option.
                  value={optionItem.id} // Sets the value of the select option.
                >
                  {optionItem.label} {/* Label to display the option */}
                </option>
              ))
            : null}
        </select>
        
         );
         break;

      case "textarea": // For a multiline text input.
        element = (
          <Textarea
            name={getControlItem.name} // Name attribute for the textarea.
            placeholder={getControlItem.placeholder} // Placeholder for user guidance.
            id={getControlItem.id} // ID for the element.
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default: // Default case, renders a basic input if `componentType` is not recognized.
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element; // Returns the JSX element for the control.
  }

  // The main JSX returned by the `CommonForm` component.
  return (
    <form onSubmit={onSubmit} className="w-100">
  {/* Event handler for form submission */}
  <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
    {/* Flex container for form elements */}
    {formControls.map((controlItem) => (
      <div className="mb-3 w-100" key={controlItem.name}>
        {/* Label for the control */}
        {renderInputsByComponentType(controlItem)}
        {/* Render the appropriate input element */}
      </div>
    ))}
  </div>
  <button disabled={isBtnDisabled} type="submit" className={styles.registerBtn}>
    {buttonText || "Submit"}
  </button>
</form>

  );
}

export default CommonForm;
