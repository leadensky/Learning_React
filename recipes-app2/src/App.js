import "./App.css";
// import Menu from "./components/Menu";
// import data from "./data/recipes.json";
import React, { useState } from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";

function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
  // return (
  //   <div className="App">
  //     <Menu recipes={data} />
  //   </div>
  // );
}

export default App;
