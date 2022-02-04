import React from "react";
import './Heading.css';

function Heading({headingText}){
    return (
      <h3 class="heading-text">{headingText}</h3>
    );
}

export default Heading;