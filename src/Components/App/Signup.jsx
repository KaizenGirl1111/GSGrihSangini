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

function Signup() {

  const [email,setEmail] = React.useState("");
  const [contactNumber,setContactNumber] = React.useState();
  const [password,setPassword] = React.useState("");
  const [cpassword,setCpassword] = React.useState("");
  const [address,setAddress] = React.useState("");

  function handleSubmit()
  {
    console.log(email);
    console.log(password);
    console.log(cpassword);
    console.log(contactNumber);
    console.log(address);
    //code here
  }
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
              <b>SignUp</b>
            </h1>
          </div>

          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email"
            onChange ={(e)=>setEmail(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="form2Example1"
            label="Contact Number"
            onChange ={(e)=>setContactNumber(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="form2Example1"
            label="Address"
            onChange ={(e)=>setAddress(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Confirm Password"
            onChange ={(e)=>setCpassword(e.target.value)}
          />
          <div class="rem">
            <MDBRow className="mb-4">
              <MDBCol className="d-flex justify-content-center">
                <MDBCheckbox
                  id="form2Example3"
                  label="Remember me"
                  defaultChecked
                />
              </MDBCol>
              <Link
                to="/login"
                style={{ display: "flex", justifyContent: "center" }}
              >
                Already Registered ?
              </Link>
            </MDBRow>
          </div>
          <MDBBtn type="submit" className="mb-4" block color="white" onClick={handleSubmit}>
            Sign Up
          </MDBBtn>
        </div>

        <div className="text-center">
          <div className="row my-4 d-flex justify-content-center">
            <div>
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="mr-md-4 z-depth-1a"
              >
                <MDBIcon fab icon="facebook-f" className="blue-text " />
              </MDBBtn>

              <MDBBtn
                type="button"
                color="#000278 #192294 #5254D8 #B7B9F4"
                rounded
                className="mr-md-4 z-depth-1a"
              >
                <MDBIcon fab icon="google-plus-g" className="blue-text" />
              </MDBBtn>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Signup;
