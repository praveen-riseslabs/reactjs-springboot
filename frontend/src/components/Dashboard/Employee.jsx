import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Employee = () => {
  const [employee, setEmployee] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}` 
      }
    };

    axios.get('http://localhost:8080/dashboard/manageemployees', config)
       .then(result => {
         if(result.data){
           setEmployee(result.data)
         }
       }).catch(err => console.log(err))
 }, [])

 const handleDelete = (id, authToken) => {
  axios.delete(`http://localhost:8080/dashboard/delete_employee/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}` 
    }
  })
    .then(result => {
      if (result.data) {
        window.location.reload();
        navigate("/dashboard/manageemployees");
      } else {
        alert("Delete operation failed.");
      }
    })
    .catch(error => {
      console.error("Error deleting employee:", error);
      alert("Error deleting employee. Please try again later.");
    });
};

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className='btn btn-success'>Add Employee</Link>
     
      <div className='mt-3'>
        <table className='table'>
          <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
          </thead>
          <tbody>
            {
              employee.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.designation}</td>
                  <td>{e.salary}</td>
                  <td>{e.address}</td>
                  <td>
                  <Link to={`/dashboard/edit_employee/${e.id}?token=${localStorage.getItem('authToken')}`} className='btn btn-info btn-sm me-2'>Edit</Link>
                    <button className='btn btn-warning btn-sm' onClick={() => handleDelete(e.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee

