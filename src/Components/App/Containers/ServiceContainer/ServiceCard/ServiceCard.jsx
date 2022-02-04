import React from "react";
import './ServiceCard.css';

function ServiceCard({img,text}){
    return (
      <div className="service-card">
        <img src={img} alt={text} className="service-img" />
        <span className="service-text">{text}</span>
      </div>
    );
}

export default ServiceCard;