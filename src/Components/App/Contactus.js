import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function ContactUS() {

  function handleSubmit() {
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(contactNo);
    console.log(message);
    //code here

  }
  const [fname,setFname] = React.useState("");
  const [lname,setLname] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [contactNo,setContactNo] = React.useState("");
  const [message,setMessage] = React.useState("");

    return (
    <>
      <NavigationBar />
      <form
        style={{
          width: "22rem",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginBottom: "100px",
          paddingTop: "150px",
        }}
      >
        <div class="card">
          <div class="block">
            <h1 class="heading text-center mb-4">
              <b>Contact Us</b>
            </h1>
          </div>
          <MDBInput
            className="mb-4"
            type="text"
            id="form2Example1"
            label="First Name"
            onChange={(e)=> setFname(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="form2Example1"
            label="Last Name"
            onChange={(e)=> setLname(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="form2Example1"
            label="Contact Number"
            onChange={(e)=> setContactNo(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="textarea"
            id="form2Example1"
            label="Message"
            onChange={(e)=> setMessage(e.target.value)}
          />

          <div class="rem">
            <MDBRow className="mb-4"></MDBRow>
          </div>
          <MDBBtn type="submit" className="mb-4" block color="white" onClick={handleSubmit}>
            Submit
          </MDBBtn>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default ContactUS;
