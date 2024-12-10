import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../css/AuthCSS/register.module.css";
import CommonForm from "../../components/common/Form";
import { registerFormControls } from "../../config";
import { registerUser } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginImg } from "../../assets";

const initialState = {
  userName: "",
  email: "",
  password: "",
};
function Register() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(registerUser(formData)).then((data) => {
      console.log(data);
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
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } else {
        toast.error(message, {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    });
  }
  return (
    <>
      <section className={`${styles.register} d-flex`}>
        <div className={styles.wrapper}>
        
          <img src={loginImg} alt="" className="img-fluid" />
        </div>
          <div className={styles.registerForm}>
            <h3>Create an Account</h3>
            <CommonForm
              formControls={registerFormControls}
              buttonText={"Sign Up"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
            <div className={styles.account}>
              Already Have An Account?{" "}
              <Link to={"/auth/login"} className={styles.span}>
                Login
              </Link>
            </div>
          </div>
       
      </section>
    </>
  );
}

export default Register;
