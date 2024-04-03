import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  const [adminTotal, setAdminTotal] = useState(null)
  const [employeeTotal, setEmployeeTotal] = useState()
  const [salaryTotal, setSalaryTotal] = useState()
  const [admins, setAdmins] = useState([])
  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, [])


  const adminCount = (authToken) => {
    axios.get('http://localhost:8080/dashboard/admin_count', {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(response => {
        const data = response.data;
        if (data && data.Status) {
          setAdminTotal(data.Result);
        } else {
          console.error("Invalid data structure or missing result:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching admin count:", error);
      });
  }


  const employeeCount = () => {
    const authToken = localStorage.getItem('authToken');

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}` 
      }
    };

    axios.get('http://localhost:8080/dashboard/employee_count', config)
      .then(response => {
        const data = response.data;
        if (!isNaN(data)) {
          setEmployeeTotal(data);
        } else {
          console.error("Invalid data structure or missing result:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching employee count:", error);
      });
  };

  const authToken = localStorage.getItem('authToken');

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  };

  const salaryCount = () => {
    axios.get('http://localhost:8080/dashboard/salary_count', config)
      .then(response => {
        const data = response.data;
        if (!isNaN(data)) {
          setSalaryTotal(data);
        } else {
          console.error("Invalid data structure or missing result:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching salary count:", error);
      });
  };

  const AdminRecords = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    };

    axios.get('http://localhost:8080/dashboard/admin_records', config)
      .then(response => {
        const adminData = response.data;
        setAdmins(adminData);
      })
      .catch(error => {
        console.error('Error fetching admin records:', error);
      });
  };

  const handleEdit = () => {
    window.alert('You have to go to manageremployees now You Can Edit the Employee');
    navigate('/dashboard/manageemployees');
  }

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Total Employee</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Salary</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>${salaryTotal}</h5>

          </div>
        </div>
      </div>
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Employees</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              admins.map(a => (
                <tr>
                  <td>{a.email}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm me-2" onClick={handleEdit}>
                      Edit
                    </button>
                    <button
                      className="btn btn-warning btn-sm" >
                      Delete
                    </button>
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

export default Home