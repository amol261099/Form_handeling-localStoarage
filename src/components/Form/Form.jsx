import React, { useState } from "react";
import "./form.css";

export const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [dob, setDob] = useState("");

  const submitHandeler =(e) =>{
    e.preventDefault();
    const data ={Name:Name,Eamil:Email,Contact:Contact,dob:dob};
    console.log(data) 
    localStorage.setItem("Data",JSON.stringify(data));
  }

  return (
    <div className="container">
      <form onSubmit={submitHandeler}>
        <div className="input-container">
          <lable>Name</lable>
          <input type="text" id="1" placeholder="Enter Your Name" value={Name}   onChange={(e) =>{setName(e.target.value)}}/>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            required
            autoComplete="off"
            value={Email}
            onChange={(e) =>{setEmail(e.target.value)}}
          />
          <label>Contact No</label>
          <input type="number" placeholder="Enter Your Contact" required value={Contact} onChange={(e)=>{setContact(e.target.value)}}/>
          <label>Date Of Birth</label>
          <input type="date" value={dob} onChange={(e) => {setDob(e.target.value)}}/>

          <button>Submit</button>
        
          
        </div>
      </form>
    </div>
  );
};
export default Form;
