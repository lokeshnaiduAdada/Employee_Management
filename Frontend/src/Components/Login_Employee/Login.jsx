
import React, { useState } from 'react'
import axios from 'axios';
import './login.css'

const Login = () => {

  const [empid, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginClick(e) {

    e.preventDefault();

    try {
      const response=await axios.post(`http://localhost:1011/login/${empid}`, {
        id: empid,
        employee_password: password
      });
      alert(response.data)
    } catch (error) {
      alert(error.data);
    }
  }
  return (
    <div className="login_container">
      <div className="login_form">
        <h2>Employee Login</h2>
        <form className='form'>
          <div className="login_userId">
            <label>Id: </label>
            <input type='number'
              placeholder='Enter the Id'
              value={empid}
              name='emp_id'
              onChange={(e) => { setEmpId(e.target.value) }}
            />
          </div>
          <div className="login_userpassword">
            <label>Password: </label>
            <input type='password'
              placeholder='Enter the password'
              value={password}
              name='password'
              required
              onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className='password_forgot'>
            <a href=''>Password forgot?</a>
          </div>
          <div className="login_button">
            <button onClick={handleLoginClick}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login