import React from "react";
import Challenge5 from "./components/challenge5/Challenge5";
import Challenge1 from "./components/Challenge1";

const App = () => {
  return (
  <div>
    <div className="headingXl">Challenge1</div>
    <Challenge1 />
    <div className="headingXl">Challenge5</div>
    <Challenge5 />
  </div>
  )
}

export default App;