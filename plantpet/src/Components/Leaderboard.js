import React from "react";
import axios from "axios";
import { useState } from "react";

const Leaderboard = () => {
  const [allData, setAllData] = useState([]);
  const axios = require("axios");
  axios.get("http://localhost:2500/users").then(function (response) {
    setAllData(response.data["users"].map((x) => <p>{x.Name}: {x.PlantLevel}</p>));
    console.log("here--");
    console.log(allData);
    console.log("here--");
  });
  return <div>{allData}</div>;
};

export default Leaderboard;
