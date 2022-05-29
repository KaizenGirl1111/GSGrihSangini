import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import logo from "./brand_logo.png";

function NavigationBar() {
  let history=useNavigate('/')
  const handleClick=()=>{
    localStorage.removeItem('token',null)
    history('/')
  }
  return (
    <Navbar expand="lg" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <div className="nav-brand">
            <img alt="" src={logo} className="nav-brand-logo" />
            <h1 className="nav-brand-heading">GrihSangini</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="NavLink" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="NavLink" href="/SosPage">
              Sos
            </Nav.Link>
            {!localStorage.getItem("token") && (
              <Nav.Link className="NavLink" href="/Signup">
                SignUp
              </Nav.Link>
            )}
            {!localStorage.getItem("token") && (
              <Nav.Link className="NavLink" href="/Login">
                Login
              </Nav.Link>
            )}
            {!localStorage.getItem("token") && (
              <Nav.Link className="NavLink" href="/Workersignup">
                WorkerSignUp
              </Nav.Link>
            )}
            {!localStorage.getItem("token") && (
              <Nav.Link className="NavLink" href="/Workerlogin">
                WorkerLogin
              </Nav.Link>
            )}
            <Nav.Link className="NavLink" href="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link className="NavLink" href="/AboutUs">
              About Us
            </Nav.Link>
            {localStorage.getItem("token") && (
              <Nav.Link className="NavLink" href="/Worker">
                FIND-WORKER
              </Nav.Link>
            )}
            {localStorage.getItem('token')?
            <button type="button" className="btn btn-light" onClick={()=>{handleClick()}}>Logout</button>:<></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
