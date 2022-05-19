import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom";
import data from "../../../DummyData/DummyDb";
import WorkerCard from "./WorkerCard";
import "./Worker.css";

function WorkersPage() { 
    
  return (
    <div style={{height:"800px"}}>
      <NavigationBar />
      <div className="services">
      <h1 className="heading">Our Workers</h1>
      <div className="data">
      {data.map((worker)=>{
        return (
          <WorkerCard name={worker.name} age={worker.age} description={worker.description} forte={worker.forte}/>
        )
      } )}
      </div>

      </div>
      <Footer/>
    </div>
  );
}

export default WorkersPage;
