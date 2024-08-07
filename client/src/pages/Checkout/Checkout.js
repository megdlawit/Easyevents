import React, { useState } from 'react';
import './Checkout.css';
import Navbar from '../Navbar';

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
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

  const handleProceed = () => {
    setShowOverlay(false);
    window.location.href = 'https://t.me/YourTelegramUser'; // Replace with the actual Telegram user link
  };

  const renderPaymentDetails = () => {
    switch (selectedPaymentMethod) {
      case 'CBE':
        return <li><strong>CBE:</strong> 1000023456788</li>;
      case 'Telebirr':
        return <li><strong>Telebirr:</strong> 1000023456788</li>;
      case 'Chapa':
        return <li><strong>Chapa:</strong> 5023456788</li>;
      default:
        return null;
    }
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
                  {renderPaymentDetails()}
                </ul>
                <button onClick={handleProceed} className="proceed-button">Attach</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
