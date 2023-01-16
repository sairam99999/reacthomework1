import React from "react";
import "./App.css";
import First from "./components/firstcomponent/First";
import Color from "./components/colors/Color";
import Effect from "./components/effect/Effect";
import Time from "./components/time/Time";
function App() {
  return (
    <>
    <div className="App">
    <h1 >This is my first react demo class </h1>
    </div>
    <First/>
    <Color/>
    <Effect/>
    <Time/>
    </>

  );
}

export default App;
