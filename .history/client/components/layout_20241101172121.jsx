/*import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/app.png';
export default function Layout() {
 return (
 <>
 
 <h1>My Portfolio</h1>
 
 < img src={football1}alt="football" className="football" width="50px" height="50px"/>
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
 
<br/>
 <hr />
 
 </>
 
 );
}
*/
//////////////////////////////////////////////////////////////////
//import * as React from 'react';
//import PropTypes from 'prop-types';
//import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import DescriptionIcon from '@mui/icons-material/Description';
//import { Routes, Route, Link } from 'react-router-dom';
//import { IconButton } from '@mui/material';
//import Brightness4Icon from '@mui/icons-material/Brightness4';
//import Brightness7Icon from '@mui/icons-material/Brightness7';

// Different page components
//function HomePage() {
  //return (
    //<Box sx={{ py: 4 }}>
      //<Typography variant="h4">Welcome to the Home Page</Typography>
      //<Typography>This is the home page content.</Typography>
    //</Box>
  //);
//}

//function AboutPage() {
  //return (
    //<Box sx={{ py: 4 }}>
      //<Typography variant="h4">About Page</Typography>
      //<Typography>This is the About page content.</Typography>
    //</Box>
  //);
//}

//function EducationPage() {
  //return (
    //<Box sx={{ py: 4 }}>
      //<Typography variant="h4">Education Page</Typography>
      //<Typography>This is the education page content.</Typography>
    //</Box>
  //);
//}

//function ProjectPage() {
  //return (
    //<Box sx={{ py: 4 }}>
      //<Typography variant="h4">Project Page</Typography>
      //<Typography>This is the project page content.</Typography>
    //</Box>
  //);
//}

//function ContactPage() {
  //return (
    //<Box sx={{ py: 4 }}>
      //<Typography variant="h4">Contact Us Page</Typography>
      //<Typography>This is the contact page content.</Typography>
    //</Box>
  //);
//}

//function DashboardLayoutNavigationLinks({ toggleTheme, theme }) {
  //const navigation = [
    //{ segment: '/', title: 'Home', icon: <DescriptionIcon /> },
    //{ segment: '/about', title: 'About Us', icon: <DescriptionIcon /> },
    { segment: '/education', title: 'Education', icon: <DescriptionIcon /> },
    { segment: '/project', title: 'Project', icon: <DescriptionIcon /> },
    { segment: '/contact', title: 'Contact Us', icon: <DescriptionIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar / Navigation Links */}
      <Box sx={{ width: 200, bgcolor: theme.palette.background.paper, p: 2 }}>
        <Typography variant="h6" gutterBottom>Navigation</Typography>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {navigation.map((item) => (
            <li key={item.segment}>
              <Link to={item.segment} style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
                <Typography variant="body1">{item.title}</Typography>
              </Link>
            </li>
          ))}
        </ul>
        <IconButton onClick={toggleTheme} sx={{ position: 'absolute', bottom: 16, right: 16 }}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

DashboardLayoutNavigationLinks.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.object,
};

function App() {
  // State to toggle between light and dark modes
  const [mode, setMode] = React.useState(localStorage.getItem('theme') || 'light');

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode); // Store theme preference in localStorage
  };

  // Create a theme based on the mode (light or dark)
  const theme = createTheme({
    palette: {
      mode: mode, // light or dark
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9', // Blue color for light/dark mode
      },
      background: {
        default: mode === 'light' ? '#f4f6f8' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#333333',
      },
      text: {
        primary: mode === 'light' ? '#000000' : '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DashboardLayoutNavigationLinks toggleTheme={toggleTheme} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
*/
/////////////////////////////////////////////////////////////////////

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from '../lib/auth-helper'
import { Link, useNavigate, useLocation } from 'react-router-dom';


const isActive = (location, path) => {
  return location.pathname === path ? { color: '#ff4081' } : { color: '#ffffff' };
};
export default function Menu(){ 
  const navigate = useNavigate();
  const location = useLocation();

  return (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        MERN Skeleton
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(location, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={isActive(location, "/users")}>Users</Button>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(location, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(location, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(location, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
               auth.clearJWT(() => navigate('/'));
            }}>Sign out</Button>
        </span>)
      }
    </Toolbar>
  </AppBar>
);
}


