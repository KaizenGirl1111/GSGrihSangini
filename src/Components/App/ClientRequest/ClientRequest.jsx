import React from 'react'
import "./ClientRequest.css";
import img1 from "../../../assets/img/sample.jpg";

function ClientRequest() {
  return (
    <div className='client-body'>
    <div >
        <h1 className='cli-req-heading'>
            Search your clients here
        </h1>
    </div>

       <div className='clients-data'>
       <div className='container'>
        
        <div className='box'>
          <div className='imgBx'>
              <img src={img1} alt=""/>
          </div>
          <div className='content'>
            <h3>
              First Client
            </h3>
            <p>
            Writing skills allow you to communicate clearly with others and create useful resources for the workplace. Even professions that don't focus on writing require written communication skills, from the initial application to daily tasks and record-keeping.
            </p>
          </div>
        </div>
    </div>
    <div className='container'>
        
        <div className='box'>
          <div className='imgBx'>
          <img src={img1} alt=""/>
          </div>
          <div className='content'>
              <h3>
                  First Client
                </h3>
                <p>
                Writing skills allow you to communicate clearly with others and create useful resources for the workplace. Even professions that don't focus on writing require written communication skills, from the initial application to daily tasks and record-keeping.
                </p>
          </div>
        </div>
    </div>
       </div>
       
       
    </div>
  )
}

export default ClientRequest