
import React, { useState } from "react";
import axios from "axios";
import "../css/addroom.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import AdminHeader from "../components/adminheader";

function AdminPage() {
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    
    phonenumber: 0,
    rentperday: 0,
    imageurls: [],
    type: "",
    description: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({
      ...roomDetails,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/rooms/addroom", roomDetails);
      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
      setSuccessMessage("");
    }
  };



  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate('/booking'); 
  };


  return (

    <div>
     
     <AdminHeader/>
    <section className="bb">

    <div className="admin-container">
      <h1>Add Room</h1>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      
      <form className="form-container" onSubmit={handleFormSubmit}>
        <h3>room name</h3>
        <input
          type="text"
          name="name"
          value={roomDetails.name}
          onChange={handleInputChange}
          placeholder="Room Name"
          required
        />
        

        

        <h4>rent rer day</h4>
        <input
          type="number"
          name="rentperday"
          value={roomDetails.rentperday}
          onChange={handleInputChange}
          placeholder="Rent per Day"
          required
        />
        <input
          type="text"
          name="type"
          value={roomDetails.type}
          onChange={handleInputChange}
          placeholder="Room Type"
          required
        />
        <textarea
          name="description"
          value={roomDetails.description}
          onChange={handleInputChange}
          placeholder="Room Description"
          required
        />
        <input
          type="text"
          name="imageurls"
          value={roomDetails.imageurls}
          onChange={handleInputChange}
          placeholder="Image URLs"
        />
        <button onClick={handleCreateAccountClick} type="submit">Add Room</button>
      </form>

      
    </div>

    </section>

    <Footer/>

    </div>
  );
}

export default AdminPage;
