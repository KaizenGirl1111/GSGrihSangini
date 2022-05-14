/* eslint-disable no-unused-vars */
import React from "react";
import "./workerlogin.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
function Workerlogin() {
  const [visible, setVisible] = React.useState(false);
  const [contactNumber,setContactNumber] = React.useState();
  const [password,setPassword] = React.useState("");
  return (
    <>
      <NavigationBar />
      <form
        style={{
          width: "22rem",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          paddingTop: "100px",
        }}
      >
        <div class="card">
          <div class="block">
            <h1 class="heading text-center mb-4">
              <b>Login-Worker</b>
            </h1>
          </div>
          <div className="abc"></div>

          <MDBInput
            className="mb-4"
            label="MobileNo"
            onChange={e => setPassword(e.target.value)}
          />

          <MDBInput className="mb-4" label="MobileNo" />

          <MDBInput
            className="mb-4"
            type={visible ? "text" : "password"}
            id="form2Example2"
            label="Password"
            onChange={e => setContactNumber(e.target.value)}
          />
          <div class="rem">
            <MDBRow className="mb-4">
              <MDBCol className="d-flex justify-content-center">
                <MDBCheckbox
                  id="form2Example3"
                  label="Show password"
                  onChange={() => setVisible(!visible)}
                />
                <MDBCheckbox
                  id="form2Example3"
                  label="Remember me"
                  defaultChecked
                />
              </MDBCol>
              <Link
                to="/Workersignup"
                style={{ display: "flex", justifyContent: "center" }}
              >
                New worker?
              </Link>
            </MDBRow>
          </div>
          <MDBBtn type="submit" className="mb-4" block color="white">
            Login
          </MDBBtn>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default Workerlogin;
