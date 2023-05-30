import React from "react"; 
import './newsletter.css'

import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                   <div className="newsletter__content">
                    <h2>Subscribe Now to get useful traveling information</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter Your Email" />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p> Your gateway to exciting destinations, 
                        insider tips, and exclusive offers. Get ready 
                        to ignite your wanderlust and embark on extraordinary
                         journeys with us. </p>
                   </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};
export default Newsletter;  