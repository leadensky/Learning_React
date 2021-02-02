import "./App.css";
import Agreement from "./components/Agreement";
import "./components/SiteLayout";
import React, { useState } from "react";

export default function App() {
  const [agree, setAgree] = useState(false);

  if(!agree)
    return <Agreement onAgree={() => setAgree(true)} />;

    const Main = React.lazy(() => import("./components/Main.js"));
    return <Main />;
}
