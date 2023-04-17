import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";

const AddEmployees = () => {
  const [name, setName] = useState();
  const [salary, setSalary] = useState();
  const [department, setDepartment] = useState();
  const { isLoading, isSuccess } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addEmployee({ name, salary, department }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Add New Employee</h1>
          <hr />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="salary">
            <b>Salary</b>
          </label>
          <input
            type="number"
            placeholder="Enter Salary"
            name="salary"
            id="salary"
            onChange={(e) => setSalary(e.target.value)}
            required
          />

          <label htmlFor="psw-repeat">
            <b>Department</b>
          </label>
          <input
            type="text"
            placeholder="Enter Department"
            name="department"
            id="deprtment"
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
          <hr />

          <button type="submit" className="registerbtn">
            {isLoading ? <span className="loader"></span> : "Submit"}
          </button>
          {isSuccess && <p className="success">Employees Add successfully</p>}
        </div>
      </form>
    </div>
  );
};

export default AddEmployees;
