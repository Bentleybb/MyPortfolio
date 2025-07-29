import React from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import auth from '../lib/auth-helper';
import '../src/index.css';


export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const jwt = auth.isAuthenticated();
  const isLoggedIn = !!jwt;
  const isAdmin = jwt?.user?.role === 'admin';


  const isActive = (path) => location.pathname === path ? { color: '#ffa340ff' } : { color: '#ffffff' };


  return (
    <nav>
      <ul>
        <li><Link to="/" style={isActive('/')}>Home</Link></li>
        <li><Link to="/about" style={isActive('/about')}>About</Link></li>
        <li><Link to="/project" style={isActive('/project')}>Project</Link></li>
        <li><Link to="/education" style={isActive('/education')}>Services</Link></li>
        <li><Link to="/contact" style={isActive('/contact')}>Contact</Link></li>
        {!isLoggedIn && (
          <>
            <li><Link to="/signin" style={isActive('/signin')}>Sign In</Link></li>
            <li><Link to="/signup" style={isActive('/signup')}>Join</Link></li>
          </>
        )}

        {isLoggedIn && (
          <>
            {isAdmin && (
              <>
                <li>
                  <Link to="/users" style={isActive('/users')}>Users</Link>
                </li>
                <li>
                  <Link to="/admin/contacts" style={isActive('/admin/contacts')}>All Contacts</Link>
                </li>
              </>
            )}
            {jwt?.user && (
              <li>
                <Link to={`/user/${jwt.user._id}`} style={isActive(`/user/${jwt.user._id}`)}>My Profile</Link>
              </li>
            )}

            <li>
              <button onClick={() => auth.clearJWT(() => navigate('/'))} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}>
                Sign Out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
