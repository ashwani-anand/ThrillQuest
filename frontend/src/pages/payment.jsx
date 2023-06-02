import React, { useState, useNavigate } from 'react';
import {Link} from 'react-router-dom'
import '../styles/PaymentGateway.css';

const PaymentGateway = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setcardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
 

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        console.log('Payment submitted:', cardNumber,cardName, expiry, cvv)

    };


    return (
        <section class="payb">

        <div className="payment-container">
            <h2>EasyPay Payment Gateway</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1111 2222 3333 4444"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cardName">Card Holder Name</label>
                    <input
                        type="text"
                        id="cardName"
                        value={cardName}
                        onChange={(e) => setcardName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiry">Expiry</label>
                    <input
                        type="text"
                        id="expiry"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        required
                    />
                </div>
                <Link to='/thank-you'><button type="submit" id="pay">Pay Now</button></Link>
            </form>
        </div>
        </section>
       
    );
};

export default PaymentGateway;


