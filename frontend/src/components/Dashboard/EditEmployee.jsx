import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const EditEmployee = () => {
  const { id } = useParams()
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    salary: '',
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

    const fetchEmployeeData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (id !== undefined) {
          const response = await axios.get(`http://localhost:8080/dashboard/manageemployees/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });
          const employeeData = response.data;
          setEmployee({
            ...employee,
            name: employeeData.name,
            email: employeeData.email,
            salary: employeeData.salary,
            address: employeeData.address,
            skills_id: employeeData.skills_id
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault()

    const authToken = localStorage.getItem('authToken');
    axios.put(`http://localhost:8080/dashboard/edit_employee/${id}`, employee, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(result => {
      if (result.data) {
        navigate("/dashboard/manageemployees");
      } else {
        alert(result.data);
      }
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Employee</h3>
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
              value={employee.name}
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
              value={employee.email}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              value={employee.salary}
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
              placeholder="1234 Main St"
              value={employee.address}
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
                return <option value={s.id}>{s.skills}</option>;
              })}
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee
