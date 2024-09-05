
import React, { useState } from 'react'
import './deletepage.css'
import axios from 'axios';

const DeletePage = () => {

    const [empid, setEmpId] = useState("");

    async function handleDeleteClick(e) {
        try {
            const response = await axios.post(`http://localhost:1011/delete/${empid}`,{
                id:empid
            });
            alert(response.data);
        } 
        catch (error) {
            alert(response.data);
        }
    }
    return (
        <div className="delete_container">
            <div className="delete_section">
                <h2>Delete Employee</h2>
                <form className='form'>
                    <div className='employe_id'>
                        <label>Id: </label>
                        <input type='number'
                            placeholder='Enter the Id'
                            name='empid'
                            value={empid}
                            onChange={(e) => { setEmpId(e.target.value) }} />
                    </div>
                    <div className='delete_button'>
                        <button onClick={handleDeleteClick}>Delete </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DeletePage