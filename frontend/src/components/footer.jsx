import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';  
import '../css/footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Hotel Booking System offers seamless hotels worldwide.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: abrehamworke78@gmail.com</p>
          <p>Phone: +251 920052836</p>
        </div>


        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i> 
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i> 
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>


      </div>
      <div className="footer-bottom">
        <p>© 2024 Hotel Booking System. All rights reserved.</p>
      </div>

    </footer>
    
  );
}

export default Footer;
