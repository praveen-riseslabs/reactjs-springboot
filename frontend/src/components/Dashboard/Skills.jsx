 import axios from 'axios'
 import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Skills = () => {
   const [skills, setSkills] = useState([])

   useEffect(() => {

    const authToken = localStorage.getItem('authToken');

    axios.get('http://localhost:8080/dashboard/get/skills', {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(result => {
        if (result.data) {
          setSkills(result.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
         <h3>Skills List</h3>
      </div>     
      <Link to="/dashboard/add_skills" className='btn btn-success'>Add Skills</Link> 
      <div className='mt-3'>
        <table className='table'>
          <thead>
              <tr>
                <th>Name</th>
              </tr>
          </thead>
          <tbody>
            {
              skills.map(s => (
                <tr>
                  <td>{s.skills}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default Skills