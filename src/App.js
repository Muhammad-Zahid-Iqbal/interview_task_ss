import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllEmployees from "./pages/AllEmployees";
import AddEmployees from "./pages/AddEmployees";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<AllEmployees />} />
      <Route path="/add-emoloyee" element={<AddEmployees />} />
    </Routes>
    </>
  );
};

export default App;
