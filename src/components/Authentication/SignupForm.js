// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Auth.css';

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     termsAccepted: false,
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate password confirmation
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     // Validate terms acceptance
//     if (!formData.termsAccepted) {
//       alert('Please accept the terms and conditions.');
//       return;
//     }

//     console.log('Signup Data:', formData);
//     // Add API call for signup here

//     // After successful signup, navigate to the login page
//     navigate('/login');
//   };

//   return (
//     <div className="auth-container">
//       <h2>Signup</h2>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//           required
//         />
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
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleInputChange}
//           required
//         />
//         <div>
//           <input
//             type="checkbox"
//             name="termsAccepted"
//             checked={formData.termsAccepted}
//             onChange={handleInputChange}
//             required
//           />
//           <label>I accept the Terms and Conditions</label>
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>
//         Already have an account?{' '}
//         <span className="link" onClick={() => navigate('/login')}> {/* Use navigate to go to login */}
//           Login
//         </span>
//       </p>
//     </div>
//   );
// };

// export default SignupForm;












import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios
import './Auth.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Validate terms acceptance
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }

    try {
      // Use axios to send the POST request
      const response = await axios.post('http://localhost:5000/auth/create', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log('Signup Successful:', response.data);

      // After successful signup, navigate to the login page
      navigate('/login');
    } catch (err) {
      console.error('Error during signup:', err);
      // Handle different error types
      if (err.response) {
        // If the server responded with an error
        setError(err.response.data.error || 'Signup failed. Please try again.');
      } else if (err.request) {
        // If no response was received
        setError('No response from the server. Please try again later.');
      } else {
        // Any other errors
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <div>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            required
          />
          <label>I accept the Terms and Conditions</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account?{' '}
        <span className="link" onClick={() => navigate('/login')}>
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
