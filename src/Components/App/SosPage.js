import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail,MdWork } from 'react-icons/md';
import "./SosPage.css";

function SosPage(){
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [contactNo,setContactNo] = React.useState("");
    const [address,setAddress] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [workDescription,setWorkDescription] = React.useState("");

    function handleSubmit() {
        //CODE HERE
    }

    return(
        <>
			<NavigationBar />
			<div className="sos_data">
				<h1 style={{color:"#192294",fontFamily:"cursive"}}>GS Sos</h1>
				<p style={{fontSize:"20px",fontFamily:"monospace"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

			</div>
			<form className='Sos_form' onSubmit={handleSubmit}>
				{/* <h1 className='Sos_heading'>‼ GS Sos ‼</h1> */}

				<div className='Sos_input_element'>
					<BsFillPersonFill />
					<input
						type='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Name'
						autoComplete='on'
					/>
				</div>

				<div className='Sos_input_element'>
					<BsFillTelephoneFill />
					<input
						type='number'
						value={contactNo}
						onChange={(e) => setContactNo(e.target.value)}
						placeholder='Contact Number'
					/>
				</div>

                <div className='Sos_input_element'>
                <MdEmail />
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Email'
					/>
				</div>

                <div className='Sos_input_element'>
					<MdWork/>
					<input
						type='text'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						placeholder='Work Category'
					/>
				</div>

                <div className='Sos_input_element'>
					<BsFillTelephoneFill />
					<textarea
						value={workDescription}
						onChange={(e) => setWorkDescription(e.target.value)}
						placeholder='Work Description'
					></textarea>
				</div>

				<div className='Sos_input_element'>
					<AiFillHome />
					<input
						type='text'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						placeholder='Address'
					/>
				</div>

			
				<button type='submit'>
					Emergency
				</button>
				
			</form>
			<Footer />
		</>
    )
}

export default SosPage;