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


/*
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
//import {About} from '../src/about'
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutNavigationLinks(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/home');
  
  

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={[
        {
          segment: 'home',
          title: 'Home',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'about',
          title: 'About Us',
          icon: <DescriptionIcon />,
        },

        {
            segment: 'education',
            title: 'Education',
            icon: <DescriptionIcon />,
          },

          {
            segment: 'project',
            title: 'Project',
            icon: <DescriptionIcon />,
          },

          {
            segment: 'contact',
            title: 'Contact Us',
            icon: <DescriptionIcon />,
          },
      ]}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutNavigationLinks.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  //window: PropTypes.func,
//};

//export default DashboardLayoutNavigationLinks;


import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// Theme setup for the layout (optional, adjust as needed)
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Different page components
function HomePage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4">Welcome to the Home Page</Typography>
      <Typography>This is the home page content.</Typography>
    </Box>
  );
}

function EducationPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4">Education Page</Typography>
      <Typography>This is the education page content.</Typography>
    </Box>
  );
}

function ProjectPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4">Project Page</Typography>
      <Typography>This is the project page content.</Typography>
    </Box>
  );
}

function ContactPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4">Contact Us Page</Typography>
      <Typography>This is the contact page content.</Typography>
    </Box>
  );
}

function DashboardLayoutNavigationLinks() {
  const location = useLocation(); // Access current location for navigation
  const navigate = useNavigate(); // Hook for programmatic navigation

  const navigation = [
    { segment: '/', title: 'Home', icon: <DescriptionIcon /> },
    { segment: '/about', title: 'About Us', icon: <DescriptionIcon /> },
    { segment: '/education', title: 'Education', icon: <DescriptionIcon /> },
    { segment: '/project', title: 'Project', icon: <DescriptionIcon /> },
    { segment: '/contact', title: 'Contact Us', icon: <DescriptionIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar / Navigation Links */}
      <Box sx={{ width: 200, bgcolor: 'grey.200', p: 2 }}>
        <Typography variant="h6" gutterBottom>Navigation</Typography>
        <ul>
          {navigation.map((item) => (
            <li key={item.segment}>
              <Link to={item.segment}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        {/* Use Routes to match the current route */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About UsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

DashboardLayoutNavigationLinks.propTypes = {
  window: PropTypes.func,
};

function App() {
  return (
    <Router>
      <DashboardLayoutNavigationLinks />
    </Router>
  );
}

export default App;

