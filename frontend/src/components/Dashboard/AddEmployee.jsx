import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    salary: '',
    designation: '',
    address: '',
    skills_id: ''
  })

  const [skills, setSkills] = useState([])
  const navigate = useNavigate()

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


  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('designation', employee.designation)
    formData.append('address', employee.address);
    formData.append('skills_id', employee.skills_id);

    const authToken = localStorage.getItem('authToken');

    axios.post('http://localhost:8080/dashboard/add_employee', employee, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    })
      .then(result => {
        console.log(result.data, 'Employee added successfully!');
        navigate('/dashboard/manageemployees');
      })
      .catch(error => {
        console.error('Error adding Employee:', error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>


          <label htmlFor="inputDesignation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputDesignation"
            placeholder="Designation"
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, designation: e.target.value })
            }
          />

          <div className="col-12">
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>


          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="Enter Your Home Address"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="category" className="form-label" >
              Skills
            </label>
            <select name="skills" id="skills" className="form-select"
              onChange={(e) => setEmployee({ ...employee, skills_id: e.target.value })}>
              {skills.map((s) => {
                return <option key={s.id} value={s.id}>{s.skills}</option>;
              })}
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee
