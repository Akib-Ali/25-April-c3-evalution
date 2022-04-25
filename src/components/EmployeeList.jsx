import axios from "axios";
import { useEffect, useState } from "react";
import "./Employee.css"

export const EmployeeList = () => {


  const [employelist,setEmployelist]= useState([])
  const[data,setData]= useState([])

  useEffect(()=>{
    getdata()
    
  },[])


  const getdata=()=>{
    axios.get(`http://localhost:8080/employee`).then(res=>{
      setData(res.data)
    })
  }



  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {data.map((employe,index)=>{
        return (
          <>
      <div className="employee_card">
         <span key={employe.id}></span>,
        <img src={employe.image} className="employee_image" alt="math.random" /><br></br>
        <span className="employee_name" > {employe.employee_name}</span><br></br>
        <span className="employee_title"> {employe.title}</span> <br></br>
        </div>
        </>
        )
      })}
        
      
    </div>
  );
};
