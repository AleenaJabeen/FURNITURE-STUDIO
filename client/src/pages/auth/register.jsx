import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../../css/AuthCSS/register.module.css';
import CommonForm from "../../components/common/Form";
import { registerFormControls } from "../../config";
import { registerUser } from "../../store/auth-slice";
import { useDispatch } from 'react-redux';



const initialState={
  userName:'',
  email:'',
  password:''
}
function Register() {
  const [formData,setFormData] = useState(initialState);
  const navigate=useNavigate();
  const  dispatch=useDispatch();
  function onSubmit(event){
    event.preventDefault();
    
    dispatch(registerUser(formData)).then((data)=>{
      if(data?.payload?.success)
        navigate("/auth/login")
       });

  }
  return (
   <>
      <section className={styles.register}>
        <div className={styles.wrapper}>
        <div className={styles.registerForm}>
            <h3>Create an Account</h3>
        <CommonForm formControls={registerFormControls} buttonText={'Sign Up'} formData={formData} setFormData={setFormData}
onSubmit={onSubmit}
        />
        <div className={styles.account}>
              Already Have An Account? <Link to={"/auth/login"} className={styles.span}>Login</Link>
            </div>
        </div>
        
        </div>
      </section>
    </>
  );
}

export default Register;
