import React from "react";
import "./login.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function Signup() {
  const [visible,setVisible] = React.useState(false);
  function handleChange()
  {
    setVisible(!visible);
  }
  return (
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
            <b>Login</b>
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
          type={visible?"text":"password"}
          id="form2Example2"
          label="Password"
        />
        <div class="rem">
          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Show Password"
                onChange = {handleChange}
              />
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
          </MDBRow>
        </div>
        <MDBBtn type="submit" className="mb-4" block color="white">
          Login
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
  );
}

export default Signup;