import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home';
import Accomodation from './page/accomodation';
import Contact from './page/contact';
import Aboutus from './page/aboutus';
import Booking from './adminpage/booking';
import AdminPage from './adminpage/adminpage';
import AdminLogin from './admin_authentication/adminlogin';
import AdminSignup from './admin_authentication/adminsignup';
import AdminHeader from './components/adminheader';
import Admin from './adminpage/admin';
import Userlist from './adminpage/usersdb';
import FetchFeedback from './adminpage/fetchfeedback';
import Adminroom from './adminpage/adminroom';






function App() {
  return (
    
    <div >

            <Router>
                     
                <Routes>
            
                    <Route path='/'  element ={<Home/> }/>
                    <Route path='/accomodation'  element ={<Accomodation/> }/>
                    <Route path='/contact'  element ={<Contact/> }/>
                    <Route path='/aboutus'  element ={<Aboutus/> }/>
                    <Route path='/booking'  element ={<Booking/>}/>
                    <Route path='/adminpage'  element ={<AdminPage/>}/>
                    <Route path='/adminlogin'  element ={<AdminLogin/>}/>
                    <Route path='/adminsignup'  element ={<AdminSignup/>}/>
                    <Route path='/adminheader'  element ={<AdminHeader/>}/>
                    <Route path='/admin'  element ={<Admin/>}/>
                    
                    <Route path='/adminroom'  element ={<Adminroom/>}/>
                    <Route path='/fetchfeedback'  element ={<FetchFeedback/>}/>

                    
                    <Route path='/usersdb'  element ={<Userlist/>}/>
                    
                    

                  
                </Routes>
                
            
            </Router>

    </div>

    

    
  )
}

export default App
