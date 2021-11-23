import React from "react";
import axios from "axios";
import { useState } from "react";

const Leaderboard = () => {
  const [allData, setAllData] = useState([]);
  const axios = require("axios");
  axios.get("http://localhost:2500/users").then(function (response) {
    setAllData(
      response.data["users"]
        .sort((a, b) => b.PlantLevel - a.PlantLevel)
        .slice(0, 10)
        .map((x, index) => (
          <p>
            {index + 1}. {x.Name}: {Math.round(x.PlantLevel)}
          </p>
        ))
    );
  });
  return <div>{allData}</div>;
};

export default Leaderboard;
