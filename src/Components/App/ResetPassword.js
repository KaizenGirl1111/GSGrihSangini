import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import "./ResetPassword.css";
import { RiLockPasswordFill } from "react-icons/ri";
function ResetPassword() {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  function handleSubmit() {
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
