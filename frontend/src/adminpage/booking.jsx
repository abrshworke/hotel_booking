
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/book.css";
import Header from "../components/header";
import Footer from "../components/footer";

function Booking() {
  const [rooms, setRooms] = useState([]); 
  const [bookedRooms, setBookedRooms] = useState([]); 

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = (await axios.get("http://localhost:4000/api/rooms/getroom")).data;
        setRooms(data);
      } catch (error) {
        console.error("Error fetching available rooms:", error);
      }
    };

    const fetchBookedRooms = async () => {
      try {
        const data = (await axios.get("http://localhost:4000/api/rooms/getbookedroom")).data;
        setBookedRooms(data);
      } catch (error) {
        console.error("Error fetching booked rooms:", error);
      }
    };

    fetchRooms();
    fetchBookedRooms();
  }, []);

  const handleBookRoom = async (roomId) => {
    try {
      await axios.post("http://localhost:4000/api/bookroom", { roomId });
      
      setRooms((prevRooms) => prevRooms.filter((room) => room._id !== roomId));

      
      const bookedRoom = rooms.find(room => room._id === roomId);
      setBookedRooms((prevBookedRooms) => [...prevBookedRooms, bookedRoom]);

      alert("Room booked successfully!");
    } catch (error) {
      console.error("Error booking room:", error);
      alert("Failed to book room. Please try again.");
    }
  };

  return (
    <div className="bo">
      <Header />
      <div className="booking-page">
        

        <h1 className="page-title">Available Rooms</h1>
        <div className="romms-li">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <Room key={room._id} room={room} onBook={handleBookRoom} />
            ))
          ) : (
            <p>No rooms available at the moment</p>
          )}
        </div>


        {/* Booked Rooms Section */}
        <h1 className="page-ti">Booked Rooms</h1>
        <div className="romms-li">
          {bookedRooms.length > 0 ? (
            bookedRooms.map((room) => (
              <div key={room._id} className="romm-card">
                <div className="romm-image-con">
                  <img
                    src={room.imageurls && room.imageurls[0] ? room.imageurls[0] : "https://via.placeholder.com/200"}
                    alt={room.name}
                    className="romm-image"
                  />
                </div>
                <div className="romm-info">
                  <h3>{room.name}</h3>
                  <p><strong>Price:</strong> {room.rentperday}</p>
                  <p><strong>Type:</strong> {room.type}</p>
                  <p><strong>Status:</strong> {room.status}</p> 
                </div>
              </div>
            ))
          ) : (
            <p>No rooms are booked yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Room({ room, onBook }) {
  return (
    <div className="romm-card">
      <div className="romm-image-con">
        <img
          src={room.imageurls && room.imageurls[0] ? room.imageurls[0] : "https://via.placeholder.com/200"}
          alt={room.name}
          className="romm-image"
        />
      </div>
      <div className="romm-info">
        <h3>{room.name}</h3>
        <p><strong>Price:</strong> {room.rentperday}</p>
        <p><strong>Type:</strong> {room.type}</p>
      </div>
      <div className="romm-actions">
        <button className="detailbtn">View Details</button>
        <button
          className="booknw"
          onClick={() => onBook(room._id)}
          disabled={room.status === "Booked"} 
        >
          {room.status === "Booked" ? "Booked" : "Book Now"}
        </button>
      </div>
    </div>
  );
}

export default Booking;
