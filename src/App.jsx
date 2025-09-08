import React from "react";
import Table from "./components/Table";
import tableData from "./data/tableData";

function App(){
  return(
    <div className="App-p6">
      <Table data={tableData}/>
    </div>
  );
};

export default App;