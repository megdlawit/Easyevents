import React, { useState } from 'react';
import './Checkout.css';
import Navbar from '../Navbar';

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [isOnsite, setIsOnsite] = useState(false);
  const [file, setFile] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false);

  const handlePaymentMethodChange = (event) => {
    const method = event.target.value;
    setSelectedPaymentMethod(method);
    setIsOnsite(method === 'Onsite');
    setShowFileInput(method !== 'Onsite');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleProceed = () => {
    if (showFileInput && !file) {
      alert("Please attach a file before proceeding.");
      return;
    }

    // Handle file upload and continue logic here
    console.log("File attached:", file);
    setShowOverlay(false);
    alert("Proceeding to the next step.");
  };

  return (
    <div>
     <Navbar />
    <div className="checkout-container">

      <h1 className="checkout-title">Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Payment Method 10% off with Telebirr, CBE & Chapa</label>
          <div className="payment-options">
            <div className="payment-option">
              <input
                type="radio"
                id="cbe"
                name="paymentMethod"
                value="CBE"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="cbe">CBE</label>
            </div>
            <div className="payment-option">
              <input
                type="radio"
                id="telebirr"
                name="paymentMethod"
                value="Telebirr"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="telebirr">Telebirr</label>
            </div>
            <div className="payment-option">
              <input
                type="radio"
                id="chapa"
                name="paymentMethod"
                value="Chapa"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="chapa">Chapa</label>
            </div>
            <div className="payment-option">
              <input
                type="radio"
                id="onsite"
                name="paymentMethod"
                value="Onsite"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="onsite">Onsite</label>
            </div>
          </div>
        </div>
        <button type="submit" className="checkout-button">
          Submit
        </button>
      </form>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-overlay" onClick={handleCloseOverlay}>×</button>
            {isOnsite ? (
              <div className="onsite-overlay">
                <h2>Registration Successful</h2>
                <p>Thank you for registering. We look forward to seeing you at the event!</p>
                <button onClick={handleCloseOverlay}>Close</button>
              </div>
            ) : (
              <div className="payment-overlay">
                <h2>Payment Details</h2>
                <p>CBE: 1000023456788</p>
                <p>Telebirr: 1000023456788</p>
                <p>BOA: 5023456788</p>
                {showFileInput && (
                  <div className="file-input-container">
                    <label htmlFor="fileInput">Attach Receipt:</label>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                    />
                  </div>
                )}
                <button onClick={handleProceed} className="proceed-button">Proceed</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Checkout;
