import React, { useState } from 'react'
import NewEmployee from '../New_Employee/NewEmployee';
import Login from '../Login_Employee/Login';
import './mainpage.css'
import UpdatePage from '../update_employee/UpdatePage';
import DeletePage from '../delete_employee/DeletePage';

const MainPage = () => {

    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    const [update,setUpdate] = useState(false);
    const [Delete,setDelete] = useState(false);

    const handleRegisterClick = () => {
        setRegister(true);
        setLogin(false);
        setDelete(false);
        setUpdate(false);
    }

    const handleLoginClick = () => {
        setLogin(true);
        setRegister(false);
        setDelete(false);
        setUpdate(false);
    }

    const handleUpdateClick=()=>{
        setLogin(false);
        setRegister(false);
        setDelete(false);
        setUpdate(true);
    }

    const handleDeleteClick=()=>{
        setLogin(false);
        setRegister(false);
        setDelete(true);
        setUpdate(false);
    }
    
    return (
        <div className='mainpage_container'>
            <h1>***Employee Management***</h1>
            <div className="buttons">
                <button onClick={handleRegisterClick}>Register</button>
                <button onClick={handleUpdateClick}>Update</button>
                <button onClick={handleDeleteClick}>Delete</button>
                <button onClick={handleLoginClick}>Login</button>
            </div>
            {
                register && <NewEmployee />
            }
            {
                login && <Login />
            }
            {
                update && <UpdatePage/>
            }
            {
                Delete && <DeletePage/>
            }
        </div>
    )
}

export default MainPage