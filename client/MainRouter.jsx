import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/Home.jsx' 
import About from './src/about.jsx'
import Contact from './src/contact.jsx'
import Education from './src/services.jsx'
import Project from './src/project.jsx'
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'
import RequireAdmin from './user/RequireAdmin'
import Profile from './user/Profile.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx'
import EditProfile from './user/EditProfile.jsx'
import Layout from './components/layout'
import './src/index.css';


function MainRouter() {
  return (
    <div className="app-container">        
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="/users" element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            } />    
          <Route path="user/edit/:userId" element={<EditProfile />} />
          <Route path="user/:userId" element={<Profile />} />
       </Route>
      </Routes>
    </div>
  )
}

export default MainRouter;
