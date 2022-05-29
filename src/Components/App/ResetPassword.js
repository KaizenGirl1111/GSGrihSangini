import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import "./ResetPassword.css";
import { RiLockPasswordFill } from "react-icons/ri";
import {useNavigate,useParams} from "react-router-dom";

function ResetPassword() {
  let history = useNavigate('/');
  let params = useParams();
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  async function handleSubmit() {
    if(newPassword===confirmPassword){
      await fetch('http://localhost:5000/reset-password',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({password: newPassword,token:params.token})
      })
      
    }else{
      console.log("Password didn't match");
    }
    history('/');
    //code here
  }
  return (
    <>
      <NavigationBar />
      <form className="reset_form" onSubmit={handleSubmit}>
        <h1 className="reset_heading">Reset Password</h1>

        <div className="input_element">
          <RiLockPasswordFill />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
        </div>

        <div className="input_element">
          <RiLockPasswordFill />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
        </div>

        <button type="submit">Reset</button>
      </form>
      <Footer />
    </>
  );
}

export default ResetPassword;
