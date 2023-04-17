import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { employeeApi, addEmployeeApi } from "../api/employeeApi";

const initialState = {
  employeesData: [],
  isLoading: false,
  isSuccess: false,
};
export const addEmployee = createAsyncThunk(
  "employee/create",
  async (employeeData, thunkAPI) => {
    try {
      return await addEmployeeApi(employeeData);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getEmployees = createAsyncThunk("employee/getAll", async (_, thunkAPI) => {
  try {
    return await employeeApi();
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.employeesData.push(action.payload);
      })
      .addCase(addEmployee.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeesData = action.payload;
      })
      .addCase(getEmployees.rejected, (state) => {
        state.isLoading = false;
      })

  },
});

export const { employeesData } = employeeSlice.actions;
export default employeeSlice.reducer;
