import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import "../css/accomodation.css";
import img from "../assets/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-photo-wallpaper-backgrounds-325040660.webp";
import img2 from "../assets/3c061f25beff7e7d01aae085b93c6c8a.jpg";
import img3 from "../assets/images (4).jpg";
import { useNavigate } from "react-router-dom";


function Accomodation() {


  const navigate = useNavigate();
  
    const handlebooknow= () => {
      navigate('/booking');   
    };

  return (
    <div>

      <Header/>

      <section className="accommodation-container">
      <div className="accommodation-header">
        <h1>Discover Our Exclusive Rooms</h1>
        <p>Experience luxury and comfort at our hotel. Choose the perfect room for your stay.</p>
      </div>

      <div className="accommodation-grid">
        <div className="roomm-card">
          <div className="roomm-imagee">
            <img src= {img2} alt="Luxury Suite" />
            <div className="roomm-overlay">
              <h3>Luxury Suite</h3>
              <p>A spacious suite with premium amenities, panoramic views, and elegant decor.</p>
              <button className="btn-book" onClick={handlebooknow}>Book Now</button>
            </div>
          </div>
        </div>

        <div className="roomm-card">
          <div className="roomm-imagee">
            <img src= {img} alt="Deluxe Room" />
            <div className="roomm-overlay">
              <h3>Deluxe Room</h3>
              <p>Enjoy a comfortable and stylish room with luxurious features for relaxation.</p>
              <button className="btn-book" onClick={handlebooknow}>Book Now</button>
            </div>
          </div>
        </div>

        <div className="roomm-card">
          <div className="roomm-imagee">
            <img src= {img3} alt="Family Room" />
            <div className="roomm-overlay">
              <h3>Family Room</h3>
              <p>A spacious room with two queen-sized beds and a cozy lounge area for families.</p>
              <button className="btn-book" onClick={handlebooknow}>Book Now</button>
            </div>
          </div>
        </div>

        


      </div>
    </section>

    <Footer/>
      
    </div>
  )
}

export default Accomodation
