/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeesData from "./Data";

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeesCopy, setEmployeesCopy] = useState([]);

  useEffect(() => {
    setEmployees(EmployeesData);
    setEmployeesCopy(EmployeesData);
  }, []);

  const filterHandler = e => {
    const status = e.target.value.toLowerCase();
    if (status !== "all") {
      let newEmployees = [...employeesCopy].filter(
        s => s.Status.toLowerCase() === status
      );
      setEmployees(newEmployees);
    } else {
      setEmployees(EmployeesData);
    }
  };

  return (
    <>
      <div className="filter-main">
        <span>Filter by status: </span>
        <select onChange={filterHandler}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="App">
        {employees.map(e => {
          return (
            <div
              className={
                e.Status === "Active" ? "card-active" : "card-inactive"
              }
            >
              <img srcSet={e.Image_} alt={e.Name} />
              <h4 className="name">{e.Name}</h4>
              <div className="position">{e.Position}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
