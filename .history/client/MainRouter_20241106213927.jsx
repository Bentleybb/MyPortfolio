import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home' 
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Project from './src/project'
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'

import Profile from './user/Profile.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx'
import EditProfile from './user/EditProfile.jsx'

import Menu from './components/layout' 
function MainRouter() {
 return (
 <div>
 <Menu/>

<Routes>

<Route exact path="/" element={<Home />} />
<Route path="/users" element={<Users />} />
<Route path="/signup" element={<Signup />}/>
<Route path="/signin" element={<Signin />} />

 
<Route
    path="/user/edit/:userId"
    element={
      <PrivateRoute>
        <EditProfile />
      </PrivateRoute>
    }
/>

<Route path="/user/:userId" element={<Profile/>}/>
<Route exact path="/about" element={<About />} />
<Route exact path="/education" element={<Education />} />
<Route exact path="/project" element={<Project />} />
<Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
 )
}
export default MainRouter

