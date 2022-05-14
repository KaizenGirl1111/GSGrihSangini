import React from "react";
import "./login.css";
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
import { Link } from "react-router-dom";

function Signup() {
  const [visible, setVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/userLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password })
    });
    const json=await response.json();
    console.log(json);
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
          paddingTop: "100px",
        }}
      >
        <div className="card">
          <div className="block">
            <h1 className="heading text-center mb-4">
              <b>Login</b>
            </h1>
          </div>

          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type={visible ? "text" : "password"}
            id="form2Example2"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <div className="rem">
            <MDBRow className="mb-4">
              <MDBCol className="d-flex justify-content-center">
                <MDBCheckbox
                  id="form2Example3"
                  label="Show Password"
                  onChange={() => setVisible(!visible)}
                />
                <MDBCheckbox
                  id="form2Example3"
                  label="Remember me"
                  defaultChecked
                />
              </MDBCol>
            </MDBRow>
          </div>
          <MDBBtn
            type="submit"
            className="mb-4"
            block
            color="white"
            onClick={handleSubmit}
          >
            Login
          </MDBBtn>
        </div>
        <Link
          to="/signup"
          style={{ display: "flex", justifyContent: "center" }}
        >
          New User?
        </Link>

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
