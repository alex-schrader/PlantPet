import logo from "./logo.svg";
import plant from "./plant_logo.png";
import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Levels from "./Components/Levels";
import "./App.css";
import waterplant from "./water.png";
import shopbutton from "./shop.png";
import LoginButton from "./Components/Loginout/LoginButton";
import LogoutButton from "./Components/Loginout/LogoutButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  const { user, isAuthenticated } = useAuth0();


 
  //backend setup stuff
  /*const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);*/
  document.body.style = 'background: #E6D1D1;';
  const [water, setWater] = useState(0);
  const clickHandlerWater = () => {
    if (water === 20) {
      setWater(0);
      setLevel(level + 0.25);
      console.log("hi");
      console.log(level);
    } else {
      setWater(water + 1);
    }
  };
  const [level, setLevel] = useState(1);

  return (
    <div className="App">
      {isAuthenticated && <Levels level={level} arg="hello" />}
      <div>
        <LoginButton />
        <LogoutButton />
        <Profile/>
      </div>
      {isAuthenticated && <img src={plant} className="imgprop" />}

      {isAuthenticated &&  <div className="water">
        <div className="progBar">
          <ProgressBar animated variant="success" now={water} max={21} />
        </div>
        <button onClick={clickHandlerWater} className="waterButton">
          <img className="waterlogo" src={waterplant}></img>
        </button>
      </div>
      <div className="shop">
        <button className="shopButton">
          <img className="shoplogo" src={shopbutton}></img>
        </button>
      </div>
    </div>
   
  );
    

}

export default App;
