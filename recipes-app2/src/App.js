import './App.css';
// import Menu from "./components/Menu";
// import data from "./data/recipes.json";
import React, { useState } from "react";
import colorData from "./data/color-data.json"
import ColorList from "./components/ColorList.js";

function App() {
  const[colors, setColors] = useState(colorData);
  return (
    <ColorList 
      colors={colors} 
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
      onRateColor={(id, rating) => {
        const newColors = colors.map(color => 
          color.id === id ? {...color, rating } : color
        );
        setColors(newColors);
      }}
    />
  );
  // return (
  //   <div className="App">
  //     <Menu recipes={data} />
  //   </div>
  // );
}

export default App;
