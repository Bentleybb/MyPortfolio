import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import auth from '../lib/auth-helper';
import '../src/index.css';


export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = auth.isAuthenticated();
  const jwt = auth.isAuthenticated();
  const isAdmin = jwt && jwt.user && jwt.user.role === 'admin';


  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/education">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!isLoggedIn && <li><Link to="/signin">Sign In / Join</Link></li>}
        {!isLoggedIn && <li><Link to="/signup"></Link></li>}
        {isLoggedIn && (
          <>
            <li><Link to={`/user/${isLoggedIn.user._id}`}>My Profile</Link></li>
            <li>{isAdmin && (
                <Link to="/users" style={{ color: '#ffffff' }}>Users</Link>
                )}</li>
            <li><button onClick={() => {
              auth.clearJWT(() => navigate('/'));
            }}>Sign Out</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}
