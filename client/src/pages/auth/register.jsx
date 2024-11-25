import React from "react";
import { Link } from "react-router-dom";
import styles from '../../css/AuthCSS/register.module.css';
import {arrow,crossIcon,google,facebook} from '../../assets';

function Register() {
  return (
   <>
      <section className={styles.register}>
        <div className={styles.wrapper}>
        <Link to={"/"} className={styles.homeBtn}><img src={crossIcon} alt="Cancel register icon" /></Link>
        <form className={styles.registerForm}>
            <h3>Register</h3>
            <input type="text" placeholder='Full name'/>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password"  placeholder='Confirm Password'/>
<Link to={"/"} className={styles.registerBtn}>Register <img src={arrow} alt="arrow" /></Link>
<div className={styles.socialIcons}>
            <div className={styles.google}><img src={google} alt="Google icon" /></div>
            <div className={styles.facebook}><img src={facebook} alt="Facebook icon" /></div>
        </div>
        <div className={styles.account}>
              Already Have An Account? <Link to={"/"} className={styles.span}>Login</Link>
            </div>
        </form>
        
        </div>
      </section>
    </>
  );
}

export default Register;
