import plant from "./plant2.gif";
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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const axios = require("axios");
const cors = require("cors");

function App() {
  const { isLoading } = useAuth0();
  //if (isLoading) {
    //return <div>loading...</div>
  //}
  const { user, isAuthenticated } = useAuth0();

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
      let tempUser = currUser;
      tempUser.PlantLevel = tempUser.PlantLevel + 0.25;
      console.log("-here");
      console.log(tempUser.UserID);
      console.log("-here");
      let tempStr = "https://localhost:2500/users/" + String(tempUser.UserID);
      axios
        .patch(tempStr, tempUser)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLevel(level + 0.25);
      console.log("hi");
      console.log(level);
    } else {
      setWater(water + 1);
    }
  };
  const [level, setLevel] = useState(1);
  const [currUser, setCurrUser] = useState([]);

  //isAuthenticated && setLevel(10);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    console.log("in use effect!");
    axios.get("http://localhost:2500/users").then(function (response) {
      let currUserData = JSON.stringify(user, null, 2);
      console.log("in axios get request");
      console.log(currUserData);
      setAllUsers(response.data);
      console.log(response.data);
      let allData = response.data["users"];
      console.log(allData["PlantLevel"]);
      setLevel(5);
    });
  }, []);

  return (
    <div className="App">
      {isLoading && <div>loading...</div>}
      {isAuthenticated && !isLoading && <Levels level={level} arg="hello" />}
      <div>
        {!isAuthenticated && !isLoading &&  <LoginButton />}
        {isAuthenticated && !isLoading &&  <LogoutButton />}
        <Profile
          allUsers={allUsers}
          setCurrUserProf={setCurrUser}
          setLevelProf={setLevel}
        />
      </div>
      {isAuthenticated && !isLoading &&  <img src={plant} className="imgprop" />}
      {isAuthenticated && !isLoading &&  (
        <div className="water">
          <div className="progBar">
            <ProgressBar animated variant="success" now={water} max={21} />
          </div>
          <button onClick={clickHandlerWater} className="waterButton">
            <img className="waterlogo" src={waterplant}></img>
          </button>
        </div>
      )}
      {isAuthenticated && !isLoading &&  (
        <div className="shop">
          <Popup
            trigger={
              <button className="shopButton">
                <img className="shoplogo" src={shopbutton}></img>
              </button>
            }
            Cposition="top center"
          >
            <div>Popup content here !!</div>
          </Popup>
        </div>
      )}
    </div>
  );
}

export default App;
