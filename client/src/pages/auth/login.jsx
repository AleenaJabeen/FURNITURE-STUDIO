import React from 'react'
// import "../css/AuthPage.css";
import {Link} from 'react-router-dom';
// import {rightArrow,cancelbtn} from '../assets'

function Login() {
  return (
    <div className="auth-container">
      <h1>Login</h1>
      {/* <Link to="/" className="cancelBtn">
      <img src={cancelbtn} alt="cancel-btn" height="30px"  /></Link>
      <div className="auth-box">
        <h4 className='bottom-spacing'>Login</h4>
        <form className='auth-form'>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className='forgot-password'>
          <Link>Forgot Password?</Link>
        </div>
        <button className="auth-btn">
          <Link to="/" className="auth-link">Login</Link>
          <img src={rightArrow} alt="right" height="34px" width="34px"/></button>
        </form>
        <div className="toggle-auth-link bottom-spacing">
          <p>Don't Have An Account?<Link to="/signup" className="toggle-link">SignUp</Link></p>
        </div>
        
      </div> */}
    </div>
  )
}

export default Login
