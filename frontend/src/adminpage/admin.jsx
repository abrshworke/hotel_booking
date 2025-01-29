
import React from 'react';
import "../css/admin.css";
import Footer from '../components/footer';
import AdminHeader from '../components/adminheader';

const Admin = () => {
  return (
    <section>
      <AdminHeader />
      <div className="hero-admin">
        <div className="-overlay">
          <div className="hero-con">        
            <h1>Welcome to the Admin Panel</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cupiditate maiores dignissimos nulla error inventore voluptatibus laudantium maxime qui! Ab.</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Admin;
