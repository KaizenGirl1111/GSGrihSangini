import React from 'react';

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function Signup() {
  return (
    <form style={{
      width:"22rem",
      alignItems: "center",
      justifyContent: "center",
      margin:"auto",
    paddingTop: '100px',


    }}>
    <h1 class="text-center mb-4">Sign Up</h1>


      <MDBInput className='mb-4' type='email' id='form2Example1' label='Email' />
      <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />
      <MDBInput className='mb-4' type='text' id='form2Example1' label='Contact Number' />
      <MDBInput className='mb-4' type='text' id='form2Example1' label='Address' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>

      </MDBRow>

      <MDBBtn type='submit' className='mb-4' block>
        Sign Up
      </MDBBtn>

      <div className='text-center'>

        <h4>or</h4>

        <div className="row my-4 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-4 z-depth-1a"
                  >
                    <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
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
    </form>
  );
}

export default Signup;
