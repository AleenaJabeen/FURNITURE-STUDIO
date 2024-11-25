import React from 'react'
import {Link} from 'react-router-dom';
import styles from '../../css/AuthCSS/login.module.css';
import {arrow,crossIcon} from '../../assets';

function Login() {
  return (
    <>
    <section className={styles.login}>
        <div className={styles.wrapper}>
          <Link to={"/"} className={styles.homeBtn}><img src={crossIcon} alt="Cancel Login icon" /></Link>
          <form className={styles.loginForm}>
            <h3>Login</h3>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className={styles.frgtPass}>Forgot Passowrd?</div>
            {/* Button to submit login */}
            <Link to={"/"} className={styles.loginBtn}>
              Login <img src={arrow} alt="arrow" />
            </Link>

            <div className={styles.account}>
              Don't Have An Account? <Link to={"register"} className={styles.span}>Register</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
