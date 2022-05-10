/* eslint-disable no-unused-vars */
import React from 'react';
import "./workersignup.css"
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './Footer/Footer';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

function Workersignup() {

    //use-state Hook
    const [FirstName,setFirstName] = React.useState("");
    const [LastName,setLastName] = React.useState("");
    const [contactNumber,setContactNumber] = React.useState();
    const [password,setPassword] = React.useState("");
    const [cpassword,setCpassword] = React.useState("");
    
    return (
        <><NavigationBar/>
        <form style={{
            width: "22rem",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            paddingTop: '100px',


        }}>
            <div class="card">
                <div class="block"><h1 class="heading text-center mb-4"><b>SignUp-Worker</b></h1></div>
                <div className='abc'></div>
                <MDBInput className='mb-4' id='form2Example1' label='FirstName'  onChange={e => setFirstName(e.target.value)}/>
                <MDBInput className='mb-4' id='form2Example1' label='LastName'   onChange={e => setLastName(e.target.value)}/>
                <MDBInput className='mb-4' id='form2Example1' label='ContactNo' onChange={e => setContactNumber(e.target.value)}/>
                <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' onChange={e => setPassword(e.target.value)}/>
                <MDBInput className='mb-4' type='password' id='form2Example2' label='Confirm Password' onChange={e => setCpassword(e.target.value)}/>
                <div class="rem">
                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                        </MDBCol>

                    </MDBRow>
                </div>
                <MDBBtn type='submit' className='mb-4' block color='white'>
                    SignUp
                </MDBBtn>


            </div>


        </form>
        <Footer/>
        </>
    );
}

export default Workersignup;
