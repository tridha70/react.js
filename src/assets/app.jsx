import React from "react";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  // Parent Component data
  const users = [
    {
      name: "Rahul",
      age: 25,
      city: "Hyderabad",
      mobile: "9876543210",
      email: "rahul@gmail.com",
      occupation: "Software Developer",
      address: "Kukatpally, Hyderabad"
    },
    {
      name: "Priya",
      age: 23,
      city: "Bangalore",
      mobile: "9876543211",
      email: "priya@gmail.com",
      occupation: "Web Developer",
      address: "Whitefield, Bangalore"
    },
    {
      name: "Suresh",
      age: 28,
      city: "Chennai",
      mobile: "9876543212",
      email: "suresh@gmail.com",
      occupation: "Data Analyst",
      address: "T Nagar, Chennai"
    },
    {
      name: "Anjali",
      age: 24,
      city: "Vijayawada",
      mobile: "9876543213",
      email: "anjali@gmail.com",
      occupation: "UI Designer",
      address: "Benz Circle, Vijayawada"
    },
    {
      name: "Kiran",
      age: 27,
      city: "Pune",
      mobile: "9876543214",
      email: "kiran@gmail.com",
      occupation: "DevOps Engineer",
      address: "Hinjewadi, Pune"
    }
  ];

  return (
    <div className="app">
      <h1>User Information</h1>

      <div className="user-container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            city={user.city}
            mobile={user.mobile}
            email={user.email}
            occupation={user.occupation}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;