import React from 'react';
import './CTA.css';
import { images } from '../../constants';

const CTA = () => {
  return (
    <div id="call" className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Calling Contestants for Whispers of the Earth Arts Contest</h3>

<p className="pt-2 pb-4">Join us for an unforgettable experience as we celebrate the intersection of art and nature.</p>
<buton className="btn-positivus">Register Here!</buton>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA