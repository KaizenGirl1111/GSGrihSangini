import React from "react";
import "./AboutUs.css"
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import logo from './NavigationBar/brand_logo.png';
import Review from "./Review"
function AboutUs() {
  return (
    <>
    <NavigationBar />
    <br></br>
    <div>
    <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
          <br></br>
				</div>
        <div>
          <h3>We make your Workers hunt easier :)</h3>
          <br></br>
        </div>
				<div className="content">
					<p>GrihSangini is a project working towards creating a brand new LinkedIn but for blue-collar workers. A place where blue-collar workers can mingle, upskill themselves, learn financial literacy and most importantly-find jobs for themselves.</p>
				</div>
				<div className="social">
					<i className="fab fa-facebook-f"></i>
					<i className="fab fa-twitter"></i>
					<i className="fab fa-instagram"></i>
				</div>
			</div>
			<div className="image-section">
      <img src={logo} alt=""></img>
			</div>
		</div>
	</div>
  </div>
  
		
		<Review />
      <Footer />
    </>
  );
}

export default AboutUs;

