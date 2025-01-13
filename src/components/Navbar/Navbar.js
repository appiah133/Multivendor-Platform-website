// import React from 'react';
// import './Navbar.css';

// const Navbar = ({ setCurrentPage, user, handleLogout }) => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-menu">
//         <li onClick={() => setCurrentPage('home')}>Home</li>
        
//         {/* Show the logout button only when the user is logged in */}
//         {user && (
//           <li onClick={handleLogout}>Logout</li>
//         )}
//       </ul>

//       {/* Show welcome message with user email only when user is logged in */}
//       {user && (
//         <div className="welcome-message">
//           <h2>Welcome, {user.email}!</h2>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







// import React from 'react';
// import './Navbar.css';

// const Navbar = ({ user, handleLogout }) => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-menu">
//         {/* If the user is logged in, show the Home link */}
//         {user ? (
//           <>
//             <li onClick={() => window.location.href = '/home'}>Home</li>
//             <li onClick={handleLogout}>Logout</li>
//           </>
//         ) : (
//           <>
//             {/* If the user is not logged in, show the Login and Sign Up links */}
//             <li onClick={() => window.location.href = '/login'}>Login</li>
//             <li onClick={() => window.location.href = '/signup'}>Sign Up</li>
//           </>
//         )}
//       </ul>

//       {/* Show welcome message with user email only when the user is logged in */}
//       {user && (
//         <div className="welcome-message">
//           <h2>Welcome, {user.email}!</h2>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;











import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {user ? (
          <>
            <li onClick={() => navigate("/home")}>Home</li>
            <li onClick={handleLogout}>Logout</li>
          </>
        ) : (
          <>
            <li onClick={() => navigate("/login")}>Login</li>
            <li onClick={() => navigate("/signup")}>Sign Up</li>
          </>
        )}
      </ul>
      {user && (
        <div className="welcome-message">
          <h2>Welcome, {user.email}!</h2>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
