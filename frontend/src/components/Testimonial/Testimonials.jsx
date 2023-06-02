import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import './testimonials.css'



const Testimonials = () => {

    const settings = {

        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        swipeToSlide: true,
        autoplaySpeed: true,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },

            }





        ]
    }
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p className="clienttestimonies">
                "I've been on many adventure trips before, but this site truly stands out.
                 The range of activities they offer is impressive,
                  and the attention to detail is remarkable.
                   I had the time of my life rafting down wild rapids and exploring
                    hidden caves. The trip leaders were experienced and made sure everyone
                     had a fantastic experience. Can't wait to book my next
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Aayush Ujjwal</h6>
                    <p className="cust">Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="clienttestimonies">
            Salam! This adventure trip site took me on a thrilling
             exploration of Asia's natural wonders.
              The heart-pounding jungle trekking in Malaysia
               and the mesmerizing diving experience in Indonesia
                were beyond my expectations. The site's commitment
                 to showcasing the diverse beauty of Asia's landscapes
                  and cultures was commendable. Terima kasih for an amazing
                   Asian-style adventure!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Marisha Pandey</h6>
                    <p className="cust"> Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="clienttestimonies">
            "Namaste! This adventure trip site gave me an incredible
             journey filled with Indian flavors and adrenaline-pumping experiences.
              From trekking in the Himalayas to river rafting in the Ganges,
               every moment was infused with excitement and cultural immersion.
                The guides were knowledgeable about local traditions and ensured
                 our safety throughout the trip. An unforgettable adventure with a
                 touch of India!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Rahul Mahajan</h6>
                    <p className="cust">Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="clienttestimonies">
            "Konnichiwa! My adventure trip with this site was an incredible
             exploration of Asia's hidden gems. The thrilling scuba diving
              in the turquoise waters of Okinawa and the serene hike to
               Mount Fuji's summit left me speechless. The site's attention
                to detail and seamless organization made the trip truly exceptional.
                 Arigatōgozaimashita for an amazing Asian-style adventure!"

            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Ashwani Ananad</h6>
                    <p className="cust">Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p className="clienttestimonies">
            "Namaste! This adventure trip site took me on a
             whirlwind journey through the diverse landscapes of Asia.
              From the exhilarating trekking in the Himalayas to the
               enchanting boat ride in the backwaters of Kerala,
                every experience was a true delight. The guides were
                 friendly and shared fascinating stories.Cant wait for it
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} alt="" className="w-25 h-25 rounded-2" />
                <div>
                    <h6 className="mb-0 mt-3">Ananya Sinha</h6>
                    <p className="cust">Customer</p>
                </div>
            </div>
        </div>

    </Slider>
};
export default Testimonials;  