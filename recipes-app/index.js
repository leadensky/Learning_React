import React from "react";
import { render } from "react-dom";
import Menu from "./src/components/Menu";
import data from "./src/data/recipes.json";

render(<Menu recipes={data} />, document.getElementById("root"));
