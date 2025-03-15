import React, { useState } from "react";
import cards from "./cardData";
import EZLogo from "./assets/EZlogo.png";
import toast, { Toaster } from "react-hot-toast";
import './App.css'; // Import the CSS file
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");



  const handleSubmit = async () => {
    if (email.trim().length === 0) {
      toast.error("Email cannot be empty.");
      return;
    }
  
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    if (email.includes("@ez.works")) {
      toast.error("Emails from '@ez.works' are not allowed.");
      return;
    }
  
    const body = { email };
  
    try {
      const { data } = await axios.post(`https://test.ezworks.ai/api`, body);
      console.log("Response data:", data);
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
    

  return (
    <div className="container">
      <div><Toaster/></div>

      <div className="header-container mb-6 flex flex-col xl:w-1/2 md:w-4/6">
     
        <div className="header-logo">
          <img
            src={EZLogo}
            alt="EZ Works Logo"
            className="logo"
          />
        </div>
        <h2 className="header-title">
          Suite Of Business Support Services
        </h2>
        <p className="header-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        </p>
        <div className="form-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="custom-input"
          />
          <button
            onClick={handleSubmit}
            className="custom-button"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card card-md">
            <div className="card-header">
              <img
                src={require(`./assets/Cards/${card.image}`)}
                alt="Card Icon"
                className="card-icon"
              />
              <h3 className="card-title">{card.title}</h3>
            </div>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile Mail */}
      <div className="form-container-mobile">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="custom-input"
          />
          <button
            onClick={handleSubmit}
            className="custom-button"
          >
            Contact Me
          </button>
        </div>
    </div>
  );
}

export default App;
