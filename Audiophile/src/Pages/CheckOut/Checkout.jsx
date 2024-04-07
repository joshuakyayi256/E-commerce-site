import { useCart } from "../../context/CartContext";
import { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import CheckoutIcon from '../../assets/checkouticon/checkout-icon.svg';
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useCart();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPIN: ""
  });

  // Toggle Modal visibility
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Proceed with form submission
      handleOpenModal();
    } else {
      alert("Please fill in all required fields.");
    }
  };

  // Function to check if all required fields are filled in
  const isFormValid = () => {
    const { name, emailAddress, address, zipCode, city, country } = formData;
    return name && emailAddress && address && zipCode && city && country;
  };

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to calculate VAT (Value Added Tax)
  const calculateVAT = () => {
    return calculateTotalPrice() * 0.2; // 20% VAT rate
  };

  // Function to calculate total price including VAT and shipping
  const calculateTotalWithVATAndShipping = () => {
    return calculateTotalPrice() + calculateVAT() + 50; // Shipping cost of $50
  };

  return (
    <div className="checkout">
      <Link to="/" className="go-back-link">
        <p>Go Back</p>
      </Link>
      <div className="container">
        <div className="checkout-container">
          <h1>CHECKOUT</h1>
          <form onSubmit={handleSubmit}>
            <div className="checkout-billing">
              <h3>BILLING DETAILS</h3>
              <div className="billing-info">
                <div className="billing-name">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Bird"
                    required
                  />
                </div>
                <div className="email-address">
                  <label htmlFor="emailAddress">Email Address:</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="phone-number">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+254756789660"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="checkout-shipping">
              <h3>SHIPPING INFO</h3>
              <label htmlFor="address">Your Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
              <div className="grid-display">
                <div className="zip-code">
                  <label htmlFor="zipCode">ZIP Code:</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Enter your ZIP code"
                    required
                  />
                </div>
                <div className="city">
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div className="country">
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter your country"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="checkout-payment">
              <h3>PAYMENT DETAILS</h3>
              <div className="payment-method">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <div className="payment-methods">
                  <div className="e-money">
                    <input
                      type="radio"
                      id="eMoney"
                      name="paymentMethod"
                      value="eMoney"
                      checked={formData.paymentMethod === "eMoney"}
                      onChange={handleChange}
                    />
                    <label htmlFor="eMoney">e-Money</label>
                  </div>
                  <div className="cash-on-delivery">
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      checked={formData.paymentMethod === "cashOnDelivery"}
                      onChange={handleChange}
                    />
                    <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                  </div>
                </div>
              </div>
              {/* Additional input fields for e-money*/}
              {formData.paymentMethod === "eMoney" && (
                <div className="eMoney-details">
                  <div className="eMoney-number">
                    <label htmlFor="eMoneyNumber">e-Money Number:</label>
                    <input
                      type="text"
                      id="eMoneyNumber"
                      name="eMoneyNumber"
                      value={formData.eMoneyNumber}
                      onChange={handleChange}
                      placeholder="Enter your e-Money number"
                    />
                  </div>
                  <div className="eMoney-pin">
                    <label htmlFor="eMoneyPIN">e-Money PIN:</label>
                    <input
                      type="text"
                      id="eMoneyPIN"
                      name="eMoneyPIN"
                      value={formData.eMoneyPIN}
                      onChange={handleChange}
                      placeholder="Enter your e-Money PIN"
                    />
                  </div>
                </div>
              )}
              {/* Show information for Cash on Delivery */}
              {formData.paymentMethod === "cashOnDelivery" && (
                <div className="cash-on-delivery-info">
                  <img src={CheckoutIcon} alt="cash exchange icon" />
                  <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
              )}
            </div>
          </form>
        </div>
          {/* Summary container */}
        <div className="summary-container">
          <div className="checkout-summary">
            <h2>SUMMARY</h2>
            <div className="cart-summary">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <img src={item.image.desktop} alt="Product" className="product-image" />
                    <div className="item-detail">
                      <h5 className="item-name">{item.name}</h5>
                      <p className="item-price">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="item-quantity"> X{item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="totals-summary">
              <div className="total">
                <p>TOTAL: </p>
                <span className="bold">${calculateTotalPrice().toLocaleString()}</span>
              </div>
              <div className="total">
                <p>SHIPPING:</p>
                <span className="bold">$50</span>
              </div>
              <div className="total">
                <p>VAT (INCLUDED): </p>
                <span className="bold">${calculateVAT().toLocaleString()}</span>
              </div>
              <div className="total">
                <p>GRAND TOTAL:</p>
                <span className="bold grand-total">${calculateTotalWithVATAndShipping().toLocaleString()}</span>
              </div>
            </div>
            <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="CONTINUE & PAY" fullWidth={true} onClick={handleSubmit} />
          </div>
        </div>
      </div>
      
      {/* Modal component with content */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-icon">
          <img src="src\assets\checkouticon\tick.png" alt="" />
        </div>
        <h2>THANK YOU FOR YOUR ORDER</h2>
        <p>You will receive an email confirmation shortly</p>
        {/* Glitter elements */}
        <div className="glitters">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="glitter" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random()}s` }}></div>
          ))}
        </div>
        <div className="summary__details">
          <ul className="modal_list">
            {/* Render the cart items */}
            {cartItems.map((item) => (
              <li key={item.id} className="modal-cart-item">
                <div className="item-details">
                  <img src={item.image.desktop} alt="Product" className="modal_product-image" />
                  <div className="item-detail">
                    <h5 className="item-name">{item.name}</h5>
                    <p className="item-price">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
                <p className="item-quantity"> X{item.quantity}</p>
              </li>
            ))}
          </ul>
          {/* Display the grand total */}
          <div className="grand-total-container">
            <p>Grand Total:</p>
            <p>${calculateTotalPrice().toLocaleString()}</p>
          </div>
        </div>
        <Link to='/'>
          <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="BACK TO HOME" fullWidth={true} />
        </Link>
      </Modal>
    </div>
  );
};

export default Checkout;