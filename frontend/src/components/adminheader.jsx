import React from 'react';
import "../css/adminheader.css";
import { useNavigate } from 'react-router-dom'; 

function AdminHeader() {

  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate('/adminlogin'); 
  };

  return (
    <div className="navbarr">
    
      

      <ul className="list">
        
        
        <li><a href="/adminpage">Add Room</a></li>
        <li><a href="/adminroom">Room List</a></li>
        <li><a href="/usersdb">User list</a></li>
        <li><a href="/fetchfeedback">Show Comment</a></li>
        
        
        

      </ul>

      <div className='btv'>
      <button onClick={handleCreateAccountClick} className="btnnk">Logout</button>
      

      </div>

      

      
      
    </div>
  );
};

export default AdminHeader;




