import React from "react";
import './WorkerCard.css';

function WorkerCard({name,age,description,forte}){
    return (
      <div className="service-card">
        <h1 className="service-text">{name}</h1>
        <br/>
        <h3> Age : {age} </h3>
        <h3> Description : {description} </h3>
        <hr/>
        {forte.map(task => {
            return(
                <>
                <h4>CATEGORY : {task.category}</h4>
                <ul>
                <li>experience : {task.experience_years} years</li>
                <li>Salary : {task.salary_per_month} per month</li>
                </ul>
                </>
            )
        })}
      </div>
    );
}

export default WorkerCard;