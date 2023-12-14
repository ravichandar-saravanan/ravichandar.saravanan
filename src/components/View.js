import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { edit } from 'react-icons-kit/feather/edit';

export const View = ({ employees, deleteEmployee, editEmployee }) => {
  const [editingEmpId, setEditingEmpId] = useState(null);

  const handleEditClick = (empid) => {
    setEditingEmpId(empid);
  };

  const handleUpdateClick = (empid) => {
    // Implement your update logic here
    setEditingEmpId(null);
  };

  return employees.map((employee) => (
    <tr key={employee.empid}>
      <td>{employee.empid}</td>
      <td>
        {editingEmpId === employee.empid ? (
          <input
            type="text"
            value={employee.name}
            onChange={(e) => editEmployee(employee.empid, 'name', e.target.value)}
          />
        ) : (
          employee.name
        )}
      </td>
      <td>
        {editingEmpId === employee.empid ? (
          <input
            type="text"
            value={employee.age}
            onChange={(e) => editEmployee(employee.empid, 'age', e.target.value)}
          />
        ) : (
          employee.age
        )}
      </td>
      <td>
        {editingEmpId === employee.empid ? (
          <button onClick={() => handleUpdateClick(employee.empid)}>Update</button>
        ) : (
          <>
            <button onClick={() => handleEditClick(employee.empid)}>
              <Icon icon={edit} />
            </button>
            <button onClick={() => deleteEmployee(employee.empid)}>
              <Icon icon={trash} />
            </button>
          </>
        )}
      </td>
    </tr>
  ));
};





