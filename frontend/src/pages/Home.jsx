import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import landingvid1 from '../assets/images/landingvid1.mp4'
import experienceImg from '../assets/images/experience.png'
import Subtitle from "../shared/subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import landingvid from ".././assets/images/landingvid.mp4"
import landingvid2 from ".././assets/images/landingvid2.mp4"

import ServiceList from "../services/ServiceList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";

import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return <> 

        <section className="parentlanding" id="homesection1">
            {/* playing the background video for landing page */}
            <video autoPlay="true" loop="true" muted="true" plays-inline className="backvid">
                <source src={landingvid} type="video/mp4" />
            </video>



            {/* landing section start */}
            <Container className="landing">
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                        
                            <h1 id="maintext">Experience adventure like never before and create<span className="highlight"> memories</span></h1>
                            <p>Dare to dream, dare to venture, and let us be your guide in unlocking the extraordinary.
                                 Get ready to redefine adventure and create memories
                                  that will linger in your heart for a lifetime.
                                   Your next unparalleled escapade awaits.</p>
                    
                        </div>
                    </Col> 

                    {/* <Col lg='2'>
                        <div className="hero__vid-box">
                        <video src={landingvid1} alt="" loop autoPlay muted plays-inline/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__vid-box">
                            <video src={heroVideo} alt="" loop autoPlay muted plays-inline/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__vid-box">
                        <video src={landingvid2} alt="" loop autoPlay muted plays-inline/>
                        </div>
                    </Col> */}
                    

                    <SearchBar />

                </Row>
            </Container>
        </section>
        {/* landing section end */}
        <section id="homesection2">
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What We Serve</h5>
                        <h2 className="services__title">We offer our best Services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>

        {/* featured tour section start */}
        <section id="homesection3">
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={"Explore"} />
                        <h2 className="featured__tour-title">Our Featured tours</h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>
        {/* featured tour section end */}

        {/* experience section start */}
        <section id="homesection4">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle subtitle={"Experience"} />

                            <h2>We specialize in curating unforgettable travel experiences<br />that cater to every adventurer's wanderlust.</h2>
                            <p>
                            Seeking cultural immersion, breathtaking landscapes, thrilling adventures, or simply a chance to relax and unwind,
                             we have the perfect itinerary for you.
                                <br />
                            Let us take you on a journey of discovery and create memories that will last a lifetime.
                            </p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>15k+</span>
                                <h6>Successfull Trips</h6>
                            </div>
                            <div className="counter__box">
                                <span>4k+</span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>10+</span>
                                <h6>Years experience</h6>
                            </div>

                        </div>

                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
        {/* experience section end */}

        {/* gallery section starts here */}
        <section id="homesection5">
            <Container>
                <Row>
                    <Col lg="12">

                        <Subtitle subtitle={"Gallery"} />
                        <h2 className="gallery__title">
                            Visit Our Customer Tour Gallery</h2>
                    </Col>
                    <Col lg="12">

                        <MasonryImagesGallery />

                    </Col>
                </Row>
            </Container>
        </section>


        {/* gallery section ends here */}

        {/* TESTIMONIAL SECTION STARTS */}
        <section id="homesection6">
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={"Testimonials"} />
                        <h2 className="testimonial__title">What our Clients Say about Us</h2>
                    </Col>
                    <Col lg="12">
                        <Testimonials />

                    </Col>
                </Row>

            </Container>
        

        {/* TESTIMONIAL SECTION ENDS */}


        
        <Newsletter />
    </section>

    


    </>
};
export default Home;  