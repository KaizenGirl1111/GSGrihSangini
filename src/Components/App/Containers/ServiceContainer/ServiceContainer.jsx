import React from "react";
import './ServiceContainer.css';
import Heading from '../Heading/Heading';
import ServiceCard from "./ServiceCard/ServiceCard";
import cleaning from './Services/cleaning.jpeg';
import cooking from './Services/cooking.jpeg';
import gardening from './Services/gardening.jpeg';

function ServiceContainer(){
    const services = [{service: "House Cleaner", image: cleaning},{service: "Cook", image: cooking},{service: "Gardener", image: gardening}]; 
    return (
      <div className="service-container">
        <Heading headingText="Services We Offer"/>
        <div className="service-sub-container">
            {services.map((service)=>{
                return <ServiceCard img={service.image} text={service.service} />
            })}
        </div>
      </div>
    );
}

export default ServiceContainer;