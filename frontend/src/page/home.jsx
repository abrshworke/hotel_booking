import React from 'react';
import "../css/home.css";
import Header from '../components/header';
import Footer from '../components/footer';




function Home() {

  return (
    
    <section>
      <div>
      <Header/>
      </div>
        
        <div className="hero-section">
             <div className="hero-overlay">
              
                 <div className="hero-content">
                  <h1 className="hero-title">Welcome to Our Hotel</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus <br /> ullam quam modi dolorum dolorem. Laudantium, odit dolorum in sequi ut sunt. <br /> Voluptatum deserunt natus illo excepturi, eveniet tempore itaque.</p>
                  
                </div> 
              </div>      
        </div>

        <div className="hotel-description">
          <h2>About Our Hotel</h2>
        <div className="hotel-description-content">
          
          

        <div className='ab'>
      <h1>Luxurious Rooms</h1>
      <p>Experience comfort and elegance in our modern, fully furnished rooms, designed to cater to your relaxation and convenience. Each room is equipped with top-notch amenities to make your stay unforgettable.</p>
    </div>

    <div className='ab'>
      <h1>Dining and Cuisine</h1>
      <p>Savor delicious meals crafted by our expert chefs. Our on-site restaurant offers a variety of international and local dishes, ensuring every meal is a culinary delight.</p>
    </div>

    <div className='ab'>
      <h1>Facilities and Amenities</h1>
      <p>Enjoy access to our gym, swimming pool, spa, and free Wi-Fi throughout the hotel. We strive to provide everything you need for a comfortable and enjoyable stay.</p>
    </div>

    <div className='ab'>
      <h1>Event and Meeting Spaces</h1>
      <p>Host your events in style with our spacious banquet halls and meeting rooms, equipped with state-of-the-art audio-visual technology for seamless gatherings.</p>
    </div>

    <div className='ab'>
      <h1>Easy Reservation Process</h1>
      <p>Book your stay effortlessly through our user-friendly online reservation system. Choose your room, check availability, and confirm your booking within minutes.</p>
    </div>
          



        </div>
      </div>

        <Footer/>

    </section>
    
    
  )
}

export default Home;
