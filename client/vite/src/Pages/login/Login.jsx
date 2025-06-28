import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [generalError, setGeneralError] = useState("");



  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit =async(e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setEmailError("");
        setGeneralError("");
        setError("");            
         if (!email) {
            setEmailError("Email is required");
            return;
        }

        if (!password){
            setError("Password is required");
            return;
        }
    try {
         const BACKEND_URL = "http://localhost:5000";
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/users/login`,
                { email, password },
                { withCredentials: true }
            );


     const data=response.data;
     if(data.success){
      localStorage.setItem("accessToken",data.user.accessToken);
      setIsUserLoggedIn(true);
      Navigate("/");
     }else{
      setGeneralError(data.message);
      console.log(data.message)
     }


  }catch(error){
    if(error.response&& error.responce.data){
      setError(error.response.data.message);

    }else{
      setError("An error occurred. Please try again");
    }

  }
    // e.preventDefault();
    console.log('Submitted:', { email, password });

  };






  return (
    <section className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
          <div className="signup-link">
          Don’t have an account? <Link to="/signup">Signup</Link>
         </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
