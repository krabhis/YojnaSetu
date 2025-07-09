import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmailError("");
    setError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    try {
      const BACKEND_URL = "http://localhost:9090";
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/users/login`,
        { email, password },
        { withCredentials: true }
      );

      const data = response.data;
      if (data.success) {
        localStorage.setItem("accessToken", data.user.accessToken);
        navigate("/"); 
      } else {
        setError(data.message);
        console.log(data.message);
      }

    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again");
      }
    }

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
          {emailError && <p className="error">{emailError}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
          {error && <p className="error">{error}</p>}

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
