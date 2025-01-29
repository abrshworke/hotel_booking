import React from 'react';
import "../css/home.css";
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../components/mainheader';
 
function Main() {
    const navigate = useNavigate();

  const handlebooknowClick = () => {
    navigate('/booking'); 
    
  };
  return (
    <section>
        <MainHeader/>
        <div className="hero-sec">
             <div className="-overlay">
                <div className="hero-content">
                                 
                  <button className="hero-button" onClick={handlebooknowClick}>Book Now</button>
                </div>
              </div>      
        </div>

        <Footer/>

    </section>
    
  )
}

export default Main;
