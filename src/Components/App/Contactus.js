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
            type="email"
            id="form2Example1"
            label="Email"
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="form2Example1"
            label="Contact Number"
          />
          <MDBInput
            className="mb-4"
            type="textarea"
            id="form2Example1"
            label="Message"
          />

          <div class="rem">
            <MDBRow className="mb-4"></MDBRow>
          </div>
          <MDBBtn type="submit" className="mb-4" block color="white">
            Submit
          </MDBBtn>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default ContactUS;
