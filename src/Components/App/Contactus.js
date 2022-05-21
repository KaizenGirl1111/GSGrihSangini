import React from "react";
import "./ContactUs.css";
import { Fragment, useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {MdEmail} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {RiMessage2Fill} from "react-icons/ri";


function Contact() {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message,setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    //code here

  }

  return (
    <Fragment>
    <NavigationBar />
      <form className="contact_form" onSubmit={handleSubmit}>
        <h1 className="contact_heading">Contact Us</h1>

        <div className="input_element">
        <BsFillPersonFill/>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
        <MdEmail/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
        <BsFillTelephoneFill/>
          <input
            type="number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="Contact Number"
          />
        </div>

        <div className="input_element">
        <RiMessage2Fill/>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <Footer />
    </Fragment>
  );
}

export default Contact;
