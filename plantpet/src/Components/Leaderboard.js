import React from "react";
import axios from "axios";
import { useState } from "react";

const Leaderboard = () => {
  const [allData, setAllData] = useState([]);
  const axios = require("axios");
  axios.get("http://localhost:2500/users").then(function (response) {
    setAllData(response.data["users"].sort((a,b) => b.PlantLevel-a.PlantLevel).map((x) => <p>{x.Name}: {Math.round(x.PlantLevel)}</p>));
    console.log("here--");
    console.log(allData);
    console.log("here--");
  });
  return <div>{allData}</div>;
};

export default Leaderboard;
