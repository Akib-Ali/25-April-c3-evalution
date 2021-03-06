import axios from "axios";
import { useState } from "react";

export const Admin = () => {

  const[formdata,setFormData] = useState({
    employee_name:"",
    employee_id:"",
    title:"",
    salary:"",
    image:"",
    username:"",
    password:"",
    tasks:"",
    status:"",
    team:"",
  
 }) 


const API = `http://localhost:8080/employee`;
 const [data,setData]= useState([])


 const handleChangle=(e)=>{
   const {name,value} = e.target;
   setFormData({
     ...formdata,
     [name]:value
   })
 }


 
const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post(`${API}`, formdata).then(()=>{
    setFormData({
      employee_name:"",
      employee_id:"",
      title:"",
      salary:"",
      image:"",
      username:"",
      password:"",
      tasks:"",
      status:"",
      team:"",
    
    })
  })

}


  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" placeholder="Employee Name" name="employee_name"  onChange={handleChangle}/>
      <input type="text" placeholder="Employee id" name="employee_id" onChange={handleChangle} />
      <select name="title" onChange={handleChangle}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" onChange={handleChangle} />
      <input type="text" placeholder="Image" name="image" onChange={handleChangle} />
      <input type="text" placeholder="User Name" name="username"  onChange={handleChangle}/>
      <input type="password" placeholder="Password" name="password" onChange={handleChangle} />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handleChangle}
      />
      <select name="status" id="status" onChange={handleChangle}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handleChangle}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
