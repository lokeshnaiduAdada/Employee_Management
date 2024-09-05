
import React, { useState } from 'react'
import axios from 'axios'
import './newemployee.css'

const NewEmployee = () => {

  const [empid, setEmpId] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("");

  async function handleRegisterClick(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1011/register",{
        id:empid,
        employee_fullname:fullname,
        employee_email:email,
        employee_mobile:mobile,
        employee_password:password
      });
      alert(response.data);

    } catch (error) {
      alert(response.data);
    }

  }
  return (
    <div className="register_container">
      <div className="register_form">
        <h2>Employee Register</h2>
        <form className='form'>
          <div className="employee_userId">
            <label>Id: </label>
            <input type='number' 
                    placeholder='Enter the Id' 
                    value={empid}
                    name='empid'
                    onChange={(e)=>{setEmpId(e.target.value)}}/>
          </div>
          <div className="employee_name">
            <label>Full Name: </label>
            <input type='text' 
                          placeholder='Enter the Name' 
                          value={fullname}
                          name='fullname'
                          onChange={(e)=>{setFullName(e.target.value)}}/>
          </div>
          <div className="employee_email">
            <label>Email: </label>
            <input type='email' 
                    placeholder='Enter the E-mail' 
                    value={email}
                    name='email'
                    onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="employee_number">
            <label>Mobile number: </label>
            <input type='number' 
                    placeholder='Enter the number' 
                    value={mobile}
                    name='mobile'
                    onChange={(e)=>{setMobile(e.target.value)}}/>
          </div>
          <div className="employee_userpassword">
            <label>Password: </label>
            <input type='password'
                     placeholder='Enter the password' 
                     value={password}
                     name='password'
                     onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div className='password_forgot'>
            <a href=''>Password forgot?</a>
          </div>
          <div className="register_button">
            <button onClick={handleRegisterClick}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewEmployee