import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props) => {
  const axios = require("axios")
  const { user, isAuthenticated } = useAuth0();
  let data = JSON.stringify(user, null, 2);
  let myUser = [];
  let oldUser = false;
  if (data) {
    console.log("here-");
    console.log(data);
    console.log(user["sub"]);
    for (let i = 0; i < props.allUsers.users.length; i++) {
      if (props.allUsers.users[i]["UserID"] == user["sub"].split("|")[1]) {
        myUser = props.allUsers.users[i];
        oldUser = true;
      }
    }
    console.log(myUser);
    props.setLevelProf(myUser.PlantLevel);
    props.setCurrUserProf(myUser)
    console.log("here-");

    if (!oldUser) {
      //push new acc to database
      let newUser = {
        UserID: user["sub"].split("|")[1],
        PlantLevel: 0,
        SeedCount: 0,
        LastWaterDate: "0",
        Friends: "0",
      };
      props.allUsers.users.push(newUser)
      axios.post('http://localhost:2500/users', newUser)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    }
  }

  return (
    isAuthenticated && (
      <div>
        ID: {user["sub"].split("|")[1]}
      </div>
    )
  );
};

export default Profile;
