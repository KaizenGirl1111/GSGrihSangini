import React from "react";
import './TestimonialsContainer.css';
import Heading from '../Heading/Heading';
import { Carousel } from "react-bootstrap";

function TestimonialsContainer(){
    const testimonials = [{name: "Radha Balbir", testimonial: "The platform not only helped land a job, but also hone my skills of cooking.", rating: "⭐⭐⭐⭐⭐"},{name: "Shraddha Kumari", testimonial: "Great site, helped us find a maid we were looking for", rating: "⭐⭐⭐⭐⭐"},{name: "Priya Roy", testimonial: "We could connect workers needed for our company.", rating: "⭐⭐⭐⭐⭐"}];
    return (
      <div className="testimonials-container">
        <Heading headingText="What Our Clients Say"/>
        <div className="testimonials-sub-container">
        <Carousel fade controls={false}>
            {testimonials.map((testimonial)=>{
                return (
                <Carousel.Item>
                    <Carousel.Caption>
                        <p class="testimonial">{testimonial.testimonial}</p>
                        <span>{testimonial.rating}</span>
                        <br></br>
                        <span class="author">{testimonial.name}</span>
                    </Carousel.Caption>
                </Carousel.Item>
                );
            })}
        </Carousel>
        </div>
      </div>
    );
}

export default TestimonialsContainer;