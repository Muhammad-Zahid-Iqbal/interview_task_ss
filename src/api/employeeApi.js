import axios from "axios";

const addEmployeeApi = async (employeeData) => {
  console.log(employeeData, "emp");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const result = await axios.post(
    "https://641b1f8e1f5d999a445bf904.mockapi.io/Employee",
    employeeData,
    config
  );
  console.log(result.data, "result");
  return result.data;
};

const employeeApi = async () => {
  const result = await axios.get(
    "https://641b1f8e1f5d999a445bf904.mockapi.io/Employee"
  );
  return result.data;
};

export { employeeApi, addEmployeeApi };
