
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/adminroom.css";
import Footer from "../components/footer";
import AdminHeader from "../components/adminheader";

function Adminroom() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = (await axios.get("http://localhost:4000/api/rooms/getroom")).data;
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const deleteroom = async (id) => {
    try {
      
      await axios.delete(`http://localhost:4000/api/rooms/deleteroom/${id}`);
      
      setRooms((prevRooms) => prevRooms.filter((room) => room._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting room");
    } 
  };

  return (
    <div>
      <AdminHeader />
      <div className="admin-booking-page">
        <h1 className="page-title">Available Rooms</h1>
        <div className="rooms-list">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <Room key={room._id} room={room} deleteroom={deleteroom} />
            ))
          ) : (
            <p>No rooms available at the moment</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Room({ room, deleteroom }) {
  return (
    <div className="room-card">
      <img
        src={room.imageurls && room.imageurls[0] ? room.imageurls[0] : "https://via.placeholder.com/200"}
        alt={room.name}
        className="room-image"
      />
      <div className="room-details">
        <h3>{room.name}</h3>
        <p>Max Count: {room.maxcount}</p>
      
        <p>Type: {room.type}</p>
      </div>
      <div className="room-actions">
        <button className="view-details-btn">View Details</button>
        
        <div>
          <button className="vbvb" onClick={() => deleteroom(room._id)}>Remove Room</button>
        </div>
      </div>
    </div>
  );
}

export default Adminroom;
