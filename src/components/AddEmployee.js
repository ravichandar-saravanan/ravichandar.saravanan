import React, { useState, useEffect } from 'react';

const AddEmployee = ({ editingEmployee, handleAddEmployeeSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setAge(editingEmployee.age);
    } else {
      setName('');
      setAge('');
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEmployeeSubmit({
      name,
      age,
      empid: editingEmployee ? editingEmployee.empid : generateEmpId(),
    });
  };

  const generateEmpId = () => {
    // Implement your logic to generate a unique empid
    return 'EMP' + Math.floor(Math.random() * 1000);
  };

  return (
    <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' className='form-control' required value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Age</label>
      <input type='text' className='form-control' required value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <button type='submit' className='btn btn-success btn-md'>
        {editingEmployee ? 'Update' : 'ADD'}
      </button>
    </form>
  );
};

export default AddEmployee;
