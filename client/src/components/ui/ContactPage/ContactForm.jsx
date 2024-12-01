import React, {useState} from "react";
import styles from "../../../css/ShoppingCSS/Contact.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        saveDetails: false,
      });
      // State for errors
      const [rowErrors, setRowErrors] = useState({
        row1: false, // First Name & Last Name
        row2: false, // Email & Phone
        row3: false, // Subject
        row4: false, // Message
      });

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
    
        // If the checkbox is toggled, validate the form
        if (type === "checkbox") {
          validateForm();
        }
      };
    
      // Validate each row
      const validateForm = () => {
        const errors = {
          row1: !(formData.firstName.trim() && formData.lastName.trim()),
          row2: !(formData.email.trim() && formData.phone.trim()),
          row3: !formData.subject.trim(),
          row4: !formData.message.trim(),
        };
    
        setRowErrors(errors);
    
        // Return true if no errors
        return !Object.values(errors).some((error) => error);
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          alert("Form submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            saveDetails: false,
          });
          setRowErrors({
            row1: false,
            row2: false,
            row3: false,
            row4: false,
          });
        }
      };

  return (
    <div className={`container-fluid ${styles.contactFormContainer}`}>
      <div className="row">
        {/* Left Section: Image/Decoration */}
        <div className="col-md-4 d-none d-md-block">
          <div className={styles.imageSection}>
            {/* Example background */}
            <div className={styles.imageBackground}></div>
          </div>
        </div>
        
        {/* Right Section: Form */}
        <div className="col-md-8 pb-3">
          <h2 className={styles.heading}>Send Your Message To Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <div className={`form-group ${styles.formGroup}`}>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name..."
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className={`form-group ${styles.formGroup}`}>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name..."
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {rowErrors.row1 && (
                <small className={styles.error}>The field is required</small>
              )}
            </div>

            <div className="row mb-3">
              <div className="col">
                <div className={`form-group ${styles.formGroup}`}>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address..."
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className={`form-group ${styles.formGroup}`}>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number..."
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {rowErrors.row2 && (
                <small className={styles.error}>The field is required</small>
              )}
            </div>

            <div className="mb-3">
              <div className={`form-group ${styles.formGroup}`}>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter Subject..."
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
              </div>
              {rowErrors.row3 && (
                <small className={styles.error}>The field is required</small>
              )}
            </div>

            <div className="mb-3">
              <div className={`form-group ${styles.formGroup}`}>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter Message Here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {rowErrors.row4 && (
                <small className={styles.error}>The field is required</small>
              )}
            </div>

            <div className={`form-check mb-3  ${styles.formCheck}`}>
              <input
                type="checkbox"
                className="form-check-input"
                id="saveDetails"
                name="saveDetails"
                checked={formData.saveDetails}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="saveDetails">
                Save my name, email in this browser for next time
              </label>
            </div>

            <button type="submit" className={`btn  ${styles.submitButton}`}>
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
