// import React, { useState } from 'react';
// import { Link,  useNavigate } from 'react-router-dom';
// import './Signup.css';
// import axios from "axios";

// function Signup() {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError]=useState("");
//   const [nameError, setNameError]=useState("");
//   const [emailError, setEmailError] = useState(""); 
//   const [passwordError, setPasswordError] = useState(""); 
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//         setIsSubmitted(true);
//         setNameError("");
//         setError("");
//         setEmailError("");
//         setPasswordError("");

//           if (!name || !email || !password) {
//             if (!name) setNameError("Name is required");
//             if (!email) setEmailError("Email is required");
//             if (!password) setPasswordError("Password is required");
//             return;
//         }

//         if (password.length < 6) {
//             setPasswordError("Password must be at least 6 characters long");
//             return;
//         }

//         if (password !== confirmPassword) {
//             setPasswordError("Passwords do not match");
//             return;
//         }

//          const BACKEND_URL = "http://localhost:5000";
//          try { 
//             const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/users/signup`,
//                 {
//                     name,
//                     email,
//                     password,
//                 },
//             );
//             console.log("Signup success:", response.data.success);
//             navigate("/login");
//           }catch(error){

//                if (error.response && error.response.data) {
//                 setError(error.response.data.message);
//             } else {
//                 setError("An error occurred. Please try again.");
//             }
//           }
//   };

//   return (
//     <section className="signup-container">
//       <div className="signup-box">
//         <h1 className="signup-title">Sign Up</h1>

//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             required
//           />

//           <label htmlFor="email">Email ID</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             required
//           />

//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm password"
//             required
//           />

//           <button type="submit">Sign Up</button>

//           <div className="login-link">
//             Already have an account? <Link to="/login">Login</Link>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from "axios";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    // Reset errors

    setError("");
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let hasError = false;

    if (!name.trim()) {
      setNameError("Name is required");
      hasError = true;
    }
    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    }

    if (hasError) return;

    const BACKEND_URL = "http://localhost:9090";

    try {
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/users/signup`, {
        name,
        email,
        password,
      });

      console.log("Signup success:", response.data.success);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {nameError && <p className="error-text">{nameError}</p>}

          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {emailError && <p className="error-text">{emailError}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {passwordError && <p className="error-text">{passwordError}</p>}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
          {confirmPasswordError && <p className="error-text">{confirmPasswordError}</p>}

          {error && <p className="error-text">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
