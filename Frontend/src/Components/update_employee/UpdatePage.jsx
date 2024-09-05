import React, { useState } from 'react'
import axios, { Axios } from 'axios';
import './updatepage.css'

const UpdatePage = () => {

  const [backendData, setBackEnd] = useState(null)
  const [empid, setEmpId] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("");

  async function handleUpdateClick(e) {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:1011/get/${empid}/${password}`);
      const data = response.data;
      setBackEnd(data);
      setEmpId(data.id);
      setFullName(data.employee_fullname|| '');
      setEmail(data.employee_email||'');
      setMobile(data.employee_mobile);
      setPassword(data.employee_password);

    } catch (error) {
      alert("Wrong password or Id");
    }

  }

  async function handleModifiedClick(e) {

    try {
      e.preventDefault();
      const response = await axios.post(`http://localhost:1011/update/${empid}`,{
        id:empid,
        employee_fullname:fullname,
        employee_email:email,
        employee_mobile:mobile,
        employee_password:password
      });
      alert(response.data);
    } catch (error) {
      alert("failed...")
    }
  }
  return (
    <div className='update_container'>
      <div className="update_section">
        <h2>Update Employee</h2>
        <form className='form'>
          <div className="employee_userId">
            <label>Id: </label>
            <input type='number'
              placeholder='Enter the Id'
              value={empid}
              name='empid'
              onChange={(e) => { setEmpId(e.target.value) }} />
          </div>
          <div>
            <label>Password</label>
            <input type='password'
              placeholder='Enter the password'
              value={password}
              name='password'
              onChange={(e)=>{ setPassword(e.target.value)}}/>
          </div>
          <div className="register_button">
            <button onClick={handleUpdateClick}>Get Details</button>
          </div>
          {
            backendData !== null && (<>
              <div className="employee_userId">
                <label>Id: </label>
                <input type='number'
                  placeholder='Enter the Id'
                  value={empid}
                  name='empid'
                  readOnly
                  onChange={(e) => { setEmpId(e.target.value) }} />
              </div>
              <div className="employee_name">
                <label>Full Name: </label>
                <input type='text'
                  placeholder='Enter the Name'
                  value={fullname}
                  name='fullname'
                  onChange={(e) => { setFullName(e.target.value) }} />
              </div>
              <div className="employee_email">
                <label>Email: </label>
                <input type='email'
                  placeholder='Enter the E-mail'
                  value={email}
                  name='email'
                  onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="employee_number">
                <label>Mobile number: </label>
                <input type='number'
                  placeholder='Enter the number'
                  value={mobile}
                  name='mobile'
                  onChange={(e) => { setMobile(e.target.value) }} />
              </div>
              <div className="employee_userpassword">
                <label>Password: </label>
                <input type='password'
                  placeholder='Enter the password'
                  value={password}
                  name='password'
                  onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className='password_forgot'>
                <a href=''>Password forgot?</a>
              </div>
              <div className="register_button">
                <button onClick={handleModifiedClick}>Update</button>
              </div>
            </>)
          }
        </form>
      </div>
    </div>
  )
}

export default UpdatePage