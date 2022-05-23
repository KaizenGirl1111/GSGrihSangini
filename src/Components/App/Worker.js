/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import React, { Fragment, useState } from "react";
import "./login.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import data from "./../../DummyData/DummyDb";
import WorkerCard from "./Workers/WorkerCard";


function Worker() {
  const [category, setcategory] = useState("");
  const [workers,setWorkers] = useState([]);
  const storeworkers=[];
  async function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <Fragment>
      <NavigationBar />
      <div class="one"></div>
      <form className="login_form" onSubmit={handleSubmit}>
      <div className="input_element">
          <input
            type="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="ENTER REQUIRED CATEGORY"
            autoComplete="on"
          />
        </div>
      </form>
      {data.forEach((worker)=>{
        {worker.forte.forEach((item)=>{
          if(item.category.localeCompare(category)===0) {
                  storeworkers.push(worker)
          }
        })}
      } )}
      {storeworkers.map((worker)=>{
        return (
          <WorkerCard name={worker.name} age={worker.age} description={worker.description} forte={worker.forte}/>
        )
      } )}
    </Fragment>
  );
}

export default Worker;
