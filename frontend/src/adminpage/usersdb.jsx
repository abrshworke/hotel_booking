
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../components/adminheader";
import Footer from "../components/footer";
import "../css/admin.css"


function Userlist() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = (await axios.get("http://localhost:4000/api/users/getuser")).data;
        console.log("Fetched users:", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);




  return (
    <div>
      <AdminHeader/>
      <table className="user-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer/>
    </div>
  );
}



export default Userlist;
