import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../../css/AuthCSS/register.module.css';
import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config";
import { loginUser } from "../../store/auth-slice";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  email: '',
  password: ''
};

function Login() {
 
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
  
    dispatch(loginUser(formData))
      .then((data) => {
        const message = data?.payload?.message || "An error occurred.";
        
        if (data?.payload?.success) {
          toast.success(message, {
            position: "bottom-right",
            autoClose: 3000,
            style: {
              fontSize: "16px", 
              fontWeight: "bold", 
              fontFamily: "'Arial', sans-serif", 
              padding: "15px",   
              color: "#caa571",   
              backgroundColor: "#000000", 
              textAlign: "center",
            },
          });
        } else {
          toast.error(message, {
            position: "bottom-right",
            autoClose: 3000,
    
          });
        }
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  }
  

  return (
    <>
      <section className={styles.register}>
        <div className={styles.wrapper}>
          <div className={styles.registerForm}>
            <h3>Login</h3>
            <CommonForm
              formControls={loginFormControls}
              buttonText="Login"
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
            <div className={styles.account}>
              Don't have An Account? <Link to={"/auth/register"} className={styles.span}>Register</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
