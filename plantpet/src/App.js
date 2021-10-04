import logo from "./logo.svg";
import "./App.css";
import plant from "./plant.png";
import Exampletext from "./Exampletext";
import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Levels from "./Components/Levels";

function App() {
  const [water, setWater] = useState(0);
  const clickHandlerWater = () => {
    if (water === 20) {
      setWater(1);
      setLevel(level + 1);
      console.log('hi')
      console.log(level)
    } else {
      setWater(water + 1);
    }
  };
  const [level, setLevel] = useState(1);

  return (
    <div className="App">
      <Levels level={level} />
      <img src={plant} />
      <p>Plant Pet</p>
      <Exampletext />
      <Exampletext />
      <div className="progBar">
        <ProgressBar animated variant="success" now={water} max={20} />
      </div>
      <button onClick={clickHandlerWater} className="waterButton">
        WATER
      </button>
      <h1>{water}</h1>
    </div>
  );
}

export default App;
