import logo from "./logo.svg";
import plant from "./plant.png";
import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Levels from "./Components/Levels";
import "./App.css";
import waterplant from './waterplant.jpg'

function App() {
  const [water, setWater] = useState(0);
  const clickHandlerWater = () => {
    if (water === 20) {
      setWater(0);
      setLevel(level + .25);
      console.log('hi')
      console.log(level)
    } else {
      setWater(water + 1);
    }
  };
  const [level, setLevel] = useState(1);

  return (
    <div className="App">
      <Levels level={level} arg = "hello"/>
      <img src={plant} className="imgprop"/>

      <div className="water">
        <div className="progBar">
          <ProgressBar animated variant="success" now={water} max={21} />
        </div>
        <button onClick={clickHandlerWater} className="waterButton">
          <img className ="waterlogo" src={waterplant}></img>
        </button>
      </div>
      {/* <h1>{water}</h1> */}

    </div>
  );
}

export default App;
