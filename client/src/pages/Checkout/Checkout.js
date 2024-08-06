import React, { useState } from 'react';
import './Checkout.css';
import Navbar from '../Navbar';

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [receiptFile, setReceiptFile] = useState(null);
  const [artworkFile, setArtworkFile] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false);

  const handlePaymentMethodChange = (event) => {
    const method = event.target.value;
    setSelectedPaymentMethod(method);
    setShowFileInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleReceiptFileChange = (event) => {
    setReceiptFile(event.target.files[0]);
  };

  const handleArtworkFileChange = (event) => {
    setArtworkFile(event.target.files[0]);
  };

  const handleProceed = () => {
    setShowOverlay(false);
    window.location.href = 'https://t.me/YourTelegramUser'; // Replace with the actual Telegram user link
  };

  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
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
              <div className="payment-overlay">
                <h2>Payment Details</h2>
                <p>For the selected payment method ({selectedPaymentMethod}), please use the following details:</p>
                <ul>
                  <li><strong>CBE:</strong> 1000023456788</li>
                  <li><strong>Telebirr:</strong> 1000023456788</li>
                  <li><strong>BOA:</strong> 5023456788</li>
                </ul>

                <button onClick={handleProceed} className="proceed-button">Proceed</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
