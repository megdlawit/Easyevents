import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Navbar from '../Navbar';
import Programs from '../Programs';
import Participants from '../Participants';
import Advert from '../Advert';
import Footer from '../Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/event/firstregistration');
  };

  return (
    <div>
    <Navbar />
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Whispers of Earth Arts Contest & Exhibition </h1>
        <p className="hero-description">Enter our competition today for a chance to win a trip to Baku, Azerbaijan and/or up to 100,000 ETB.</p>
        <button className="hero-button" onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
    <Advert />
    <Footer />
    </div>
  );
};

export default LandingPage;
