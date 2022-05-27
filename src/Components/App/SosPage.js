import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail,MdWork } from 'react-icons/md';
import "./SosPage.css";
import emergency from "../../assets/images/images.jpeg"

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
            <div className="main-body">
            <div className="Sos_image">
                <img src={emergency} alt="image" />
            </div>
			<form className='Sos_form' onSubmit={handleSubmit}>
				<h1 className='Sos_heading'>‼ GS Sos ‼</h1>

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
            </div>
			<Footer />
		</>
    )
}

export default SosPage;