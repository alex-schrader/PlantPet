import logo from "./logo.svg";
import plant from "./plant_logo.png";
import React, { useState, useEffect } from "react";
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
//import axios from "axios";

const axios = require("axios");

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

function App() {
  const { user, isAuthenticated } = useAuth0();
  async function getData() {
    console.log("user")
    console.log(user)
    let usersData = JSON.stringify(user, null, 2);
    console.log("here!");
    console.log(usersData);
    console.log("here!");
    return usersData
  }
  let userData = getData()

  //backend setup stuff
  /*const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);*/
  document.body.style = "background: #E6D1D1;";
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
  // const PopupExample = () => (
  //   <Popup trigger={<button> Trigger</button>} position="right center">
  //     <div>Popup content here !!</div>
  //   </Popup>
  // );

  //isAuthenticated && setLevel(10);
  let currUser = {}
  let userNumber = -5
  console.log("in use effect!");
  useEffect(() => {
    console.log("here");
    console.log(userData);
    console.log("here");
    axios.get("http://localhost:2500/users").then(function (response) {
      console.log("in axios get request");
      console.log(response.data);
      let allData = response.data["users"];
      for (let i = 0; i < allData.length; i++) {
        if (allData[i]["UserID"] == 25) {
          console.log("in iterator");
          console.log(allData[i]["UserID"]);
          console.log(allData[i]);
          currUser = allData[i]
          userNumber = i
          //let user = allData[i]
        }
      }
      console.log("currUser")
      console.log(currUser)
      console.log(userNumber)
      //console.log(allData[1]["PlantLevel"])
      setLevel(currUser["PlantLevel"]);
    });
  }, []);

  return (
    <div className="App">
      {isAuthenticated && <Levels level={level} arg="hello" />}
      <div>
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
        <Profile />
      </div>
      {isAuthenticated && <img src={plant} className="imgprop" />}
      {isAuthenticated && (
        <div className="water">
          <div className="progBar">
            <ProgressBar animated variant="success" now={water} max={21} />
          </div>
          <button onClick={clickHandlerWater} className="waterButton">
            <img className="waterlogo" src={waterplant}></img>
          </button>
        </div>
      )}
      {isAuthenticated && (
        <div className="shop">
          <button className="shopButton">
            <img className="shoplogo" src={shopbutton}></img>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
