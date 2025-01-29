import React from 'react';
import "../css/header-footer.css";
import { useNavigate } from 'react-router-dom'; 
import imgd from "../assets/luxury-hotel-logo-design-template-ac37aa5c02927f6720bc68c71247b69c_screen.jpg"

function Header() {

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/adminsignup'); 
  };


  return (
    <div className="navbar">
      <img className='imgn' src= {imgd} alt="your image" />
      

      <ul className="listt">
        
        <li><a href="/">Home</a></li>
        <li><a href="/accomodation">Accommodation</a></li>
        <li><a href="/gallary">Gallary</a></li>
        <li><a href="/contact">Contact</a></li>
        

      </ul>

      <div className='btv'>
      <button onClick={handleCreateAccount} className="btnnn"> Admin</button>

      </div>

      

      
      
    </div>
  );
};

export default Header;




