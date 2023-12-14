import React, { useState, useEffect } from 'react';
import { View } from './components/View';

// Getting the values from local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('employees');
  return data ? JSON.parse(data) : [];
};

export const App = () => {
  // Main array of objects state || employees state || employees array of objects
  const [employees, setEmployees] = useState(getDatafromLS());

  // Input field states
  const [employeeName, setEmployeeName] = useState('');
  const [employeeAge, setEmployeeAge] = useState('');
  const [employeeEmpId, setEmployeeEmpId] = useState('');

  // Form submit event
  const handleAddEmployeeSubmit = (e) => {
    e.preventDefault();
    // Creating an object
    let employee = {
      name: employeeName,
      age: employeeAge,
      empid: employeeEmpId,
    };
    setEmployees([...employees, employee]);
    setEmployeeName('');
    setEmployeeAge('');
    setEmployeeEmpId('');
  };

  // Delete employee from LS
  const deleteEmployee = (empid) => {
    const filteredEmployees = employees.filter((element) => element.empid !== empid);
    setEmployees(filteredEmployees);
  };

  // Saving data to local storage
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);
  const editEmployee = (empid, field, value) => {
    const updatedEmployees = employees.map((employee) =>
      employee.empid === empid ? { ...employee, [field]: value } : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className='wrapper'>
      <h1>EmployeeList App</h1>
      <p>Add and view your employees using local storage</p>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete='off' className='form-group' onSubmit={handleAddEmployeeSubmit}>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              required
              onChange={(e) => setEmployeeName(e.target.value)}
              value={employeeName}
            />
            <br />
            <label>Age</label>
            <input
              type='text'
              className='form-control'
              required
              onChange={(e) => setEmployeeAge(e.target.value)}
              value={employeeAge}
            />
            <br />
            <label>Employee ID</label>
            <input
              type='text'
              className='form-control'
              required
              onChange={(e) => setEmployeeEmpId(e.target.value)}
              value={employeeEmpId}
            />
            <br />
            <button type='submit' className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {employees.length > 0 && (
            <>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>

                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Delete/Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View employees={employees} deleteEmployee={deleteEmployee} editEmployee={editEmployee} />
                  </tbody>
                </table>
              </div>
              <button className='btn btn-danger btn-md' onClick={() => setEmployees([])}>
                Remove All
              </button>
            </>
          )}
          {employees.length < 1 && <div>No employees are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
