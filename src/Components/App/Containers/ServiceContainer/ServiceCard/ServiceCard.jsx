import React from "react";
import './ServiceCard.css';
import {Link} from "react-router-dom";

function ServiceCard({img,text}){
    return (
      <Link to={`/services/${text}`} style={{ textDecoration: 'none' }}>
      <div className="service-card">
        <img src={img} alt={text} className="service-img" />
        <span className="service-text">{text}</span>
      </div>
      </Link>
    );
}

export default ServiceCard;