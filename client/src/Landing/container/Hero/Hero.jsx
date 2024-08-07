import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import { IconScroll } from '../../components';
import './Hero.css';

const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/event/firstregistration');
  };

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">Whispers of Earth Arts Competition & Exhibition</h1>
          <p className="py-4">Win a trip to Baku, Azerbaijan for COP29 or up to 100,000 ETB cash prize</p>
          <button className="btn-positivus" onClick={handleRegisterClick}>Register</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>

      {/* <div className="clients">
      {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    ))}
  
      </div> */}
      <IconScroll />
    </div>
  );
};

export default Hero;
