import React from "react"; 
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const serviceData = [
      {
        imgUrl: weatherImg,
        title: "Travel Resources and Tips",
        desc:" We offer comprehensive travel resources, including travel guides, packing lists, safety tips, visa information, and local insights, to help you plan and prepare for your journey with ease."
      },
      {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc:" We offer a wide range of guided tours led by experienced and knowledgeable local guides. Explore cultural landmarks, and natural wonders while gaining insights into the local culture and history."
      },
      {
        imgUrl: customizationImg,
        title: "Customization",
        desc:" We offer personalized itineraries tailored to your ideas, preferences and interests, ensuring a safe,unique and unforgettable travel experience throughout the trip with all the privileges."
      },

]
const ServiceList = () => {
    return <>
    {
        serviceData.map((item, index) => (
            <Col lg='3' md="6" sm="12" className="mb-4" key={index}>
                <ServiceCard item={item} />
            </Col>
        )
        )
    }

    </>
};
export default ServiceList;  