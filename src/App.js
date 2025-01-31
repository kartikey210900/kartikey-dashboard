import React from "react";
import Sidebar from "./Sidebar";
import ProductTable from "./ProductTable";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ProductTable />
    </div>
  );
};

export default App;
