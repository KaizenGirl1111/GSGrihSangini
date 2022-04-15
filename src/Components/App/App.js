import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login"


function App() {

  return (
    <div class="app">

<Router>

      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      </Routes>




        </Router>






    </div>
  );
}

export default App;
