import React,{useState} from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
import logo from './brand_logo.png';
import {authentication} from "../../../firebase-config"
import {onAuthStateChanged} from "firebase/auth"

function NavigationBar(){

  const [user, setUser] = useState({});

  onAuthStateChanged(authentication,(currentUser) => {
    setUser(currentUser);
  })
    return (
      <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
     >
     
       <Container>
         <Navbar.Brand href="#home">
           <div className="nav-brand">
             <img
             alt=""
             src={logo}
             className="nav-brand-logo"
             />
             <h1
             className="nav-brand-heading"
             >
             GrihSangini
             </h1>
           </div>
         </Navbar.Brand>
         <Navbar.Toggle/>
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav>
           <Nav.Link className="NavLink" href="/">Home</Nav.Link>
             <Nav.Link className="NavLink" href="/Signup">SignUp</Nav.Link>
             <Nav.Link className="NavLink" href="/Login">Login</Nav.Link>
             <Nav.Link className="NavLink" href="/Workersignup">WorkerSignUp</Nav.Link>
             <Nav.Link className="NavLink" href="/Workerlogin">WorkerLogin</Nav.Link>
             <Nav.Link className="NavLink" href="/contact">Contact Us</Nav.Link>
             <Nav.Link className="NavLink" href="/AboutUs">About Us</Nav.Link>
             <Nav.Link className="NavLink" href="/Worker">FIND-WORKER</Nav.Link>
             <Nav.Link className="NavLink" >{user.email}</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    );
}

export default NavigationBar;
