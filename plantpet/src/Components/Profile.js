import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();
  let data = JSON.stringify(user, null, 2);
  let myUser = []
  let oldUser = false
  if (data) {
    console.log("here-");
    console.log(data);
    console.log(user["sub"]);
    for (let i = 0; i<props.allUsers.users.length;i++){
      if(props.allUsers.users[i]["UserID"]==user["sub"]){
        myUser = props.allUsers.users[i]
        oldUser = true
      }
    }
    console.log(myUser)
    props.setLevelProf(myUser.PlantLevel)
    console.log("here-");
  }

  return (
    isAuthenticated && (
      <div>
        <h1>hello</h1>
        {data}
      </div>
    )
  );
};

export default Profile;
