import React from "react";
import './Footer.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function Footer(){
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="description">
            <h4>GS GrihSangini</h4>
            <p>An initiative to reskill blue-collar workers and connect them to service buyers.</p>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/company/grihsangini" className="social-icon"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>
            <a href="https://www.instagram.com/invites/contact/?i=y88b1dto0gyr&utm_content=ltxli8v" className="social-icon"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></a>
          </div>
        </div>
        <div className="copyright">Copyright © 2021 | GS GrihSangini</div>
      </div>
    );
}

export default Footer;