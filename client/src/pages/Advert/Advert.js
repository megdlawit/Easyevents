import React from 'react';
import './Advert.css';
import img from './per.jpg';

const ad = {
  id: 1,
  title: 'Call for Artists',
  description: 'Enter our competition today for a chance to win a trip to Baku, Azerbaijan and/or up to 100,000 ETB.',
  image: img, // Correctly using the imported image
  link: '/Register'
};

const Advert = ({ ad }) => {
  return (
    <div className="advert-banner">
      <div className="advert-banner-info">
        <h3 className="advert-banner-title">{ad.title}</h3>
        <p className="advert-banner-description">{ad.description}</p>
        <a href={ad.link} className="advert-banner-link">Learn More</a>
      </div>
      <img src={ad.image} alt={ad.title} className="advert-banner-logo" />
    </div>
  );
};

const AdvertComponent = () => {
  return (
    <div className="advert-banner-container">
      <Advert ad={ad} />
    </div>
  );
};

export default AdvertComponent;
