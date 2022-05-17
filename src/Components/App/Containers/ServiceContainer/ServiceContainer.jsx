import React from "react";
import './ServiceContainer.css';
import Heading from '../Heading/Heading';
import ServiceCard from "./ServiceCard/ServiceCard";
import cleaning from './Services/cleaning.jpeg';
import cooking from './Services/cooking.jpeg';
import gardening from './Services/gardening.jpeg';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function ServiceContainer(){
  useEffect(()=>{
    Aos.init({duration:900});

    },[]);
    const services = [{service: "House Cleaner", image: cleaning},{service: "Cook", image: cooking},{service: "Gardener", image: gardening}]; 
    return (
      <div className="service-container">
        <Heading data-aos="" headingText="Services We Offer"/>
        <div data-aos="fade-right" className="service-sub-container">
            {services.map((service)=>{
                return <ServiceCard  img={service.image} text={service.service} />
            })}
        </div>
      </div>
    );
}

export default ServiceContainer;