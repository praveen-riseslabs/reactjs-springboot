import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddSkills = () => {

    const [skills, setSkills] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const authToken = localStorage.getItem('authToken');

        axios.post('http://localhost:8080/dashboard/add_skills', { skills }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(response => {
                console.log(response, 'Skills added successfully!');
                navigate('/dashboard/skills');
            })
            .catch(error => {
                console.error('Error adding skills:', error);
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Add Skill</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="skills"><strong>Skills:</strong></label>
                        <input type="text" name='skills' placeholder='Enter Skills'
                            onChange={(e) => setSkills(e.target.value)} value={skills} className='form-control rounded-0' />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Add Skills</button>
                </form>
            </div>
        </div>
    )
}


export default AddSkills


