import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEmployees } from "../redux/employeeSlice";

const AllEmployees = () => {
  const { isLoading, employeesData } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  console.log(employeesData, "data");
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div className="heading">
            <h3>Employees List</h3>
            <button
              className="emp-btn"
              onClick={() => navigate("/add-emoloyee")}
            >
              Add Employee
            </button>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Salary</th>
              <th>Department</th>
            </tr>
            {employeesData.map((data, ind) => (
              <tr key={ind}>
                <td>{data.name}</td>
                <td>{data.salary}</td>
                <td>{data.department}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </>
  );
};

export default AllEmployees;
