import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import ContactUS from "./Contactus";
import Workersignup from "./Workersignup";
import Workerlogin from "./Workerlogin";
import SosPage from "./SosPage"

import ClientRequest from "./ClientRequest/ClientRequest.jsx";
import { Scrollbars } from "react-custom-scrollbars";

import AboutUs from "./AboutUs";
import WorkersPage from "./Workers/Workers";
import Worker from "./Worker";
import ForgotPassword from "./forgotPassword";
import ResetPassword from "./ResetPassword";
import PhoneVerification from "./PhoneVerification";

function App() {
  return (
    <>
    <ToastContainer/>
    <div class="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<ContactUS />} />
          <Route path="/Workersignup" element={<Workersignup />} />
          <Route path="/Workerlogin" element={<Workerlogin />} />
          <Route path="/SosPage" element={<SosPage />} />
          <Route path="/phoneVerification" element ={<PhoneVerification/>}/>
          <Route
            path="/Workerlogin/clientrequest"
            element={<ClientRequest />}
          />

          <Route path="/AboutUs" element={<AboutUs />} />

          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          ></Route>

          <Route path="/Worker" element={<Worker />} />

          <Route path="/services">
            <Route path=":id" element={<WorkersPage />}></Route>
          </Route>

          <Route path="/forgot" element={<ForgotPassword />}></Route>
        </Routes>
      </Router>
    </div>
    </>
    
  );
}

export default App;
