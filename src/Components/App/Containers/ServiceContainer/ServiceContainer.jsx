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
      <>
      <div className="aboutus" data-aos="fade-right">
      <p>⭐️⭐️⭐️</p>
      <p>At GrihSangini we're trying to build a LinkedIn for low wage workers and a platform for employers for easy and fast hiring. We provide upskilling certification for our workers in their domains (gardening, cooking etc) and equip them with latest government schemes for them so that they can be better financially planned</p>
      <p>⭐️⭐️⭐️</p>
      </div>
      <div className="service-container">
        <Heading data-aos="" headingText="Services We Offer"/>
        <div data-aos="fade-left" className="service-sub-container">
            {services.map((service)=>{
                return <ServiceCard  img={service.image} text={service.service} />
            })}
        </div>
      </div>
      </>
    );
}

export default ServiceContainer;