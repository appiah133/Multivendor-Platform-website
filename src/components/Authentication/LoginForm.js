// import React, { useState } from 'react';
// import './Auth.css';

// const LoginForm = ({ setCurrentPage, setUser }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     console.log('Sending request with data:', formData);

//     e.preventDefault();
//     setError(''); // Reset error message

//     try {
//       const response = await fetch('http://localhost:5000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login Successful:', data);

//         // Example: Save token or user data in localStorage or context
//         localStorage.setItem('authToken', data.token);

//         // Set the user after successful login (store user data)
//         setUser({ email: formData.email });  // Update user state with email (or full user data)

//         // Redirect to the home page
//         setCurrentPage('home');
//       } else {
//         const errorData = await response.json();
//         setError(errorData.error || 'Login failed. Please try again.');
//       }
//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       <p>
//         Don't have an account?{' '}
//         <span className="link" onClick={() => setCurrentPage('signup')}>
//           Register
//         </span>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Auth.css';

// const LoginForm = ({ setUser }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     console.log('Sending request with data:', formData);

//     e.preventDefault();
//     setError(''); // Reset error message

//     try {
//       const response = await fetch('http://localhost:5000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login Successful:', data);

//         // Example: Save token or user data in localStorage or context
//         localStorage.setItem('authToken', data.token);

//         // Set the user after successful login (store user data)
//         setUser({ email: formData.email });  // Update user state with email (or full user data)

//         // Redirect to the home page
//         navigate('/home');  // Navigate to home page
//       } else {
//         const errorData = await response.json();
//         setError(errorData.error || 'Login failed. Please try again.');
//       }
//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       <p>
//         Don't have an account?{' '}
//         <span className="link" onClick={() => navigate('/signup')}> {/* Use navigate to go to signup */}
//           Register
//         </span>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userEmail", formData.email);
        setUser({ email: formData.email });
        console.log('Login Successful:', data);
        navigate("/home"); // Navigate to the homepage on success
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginForm;


