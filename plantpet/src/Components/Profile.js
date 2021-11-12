import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  let data = JSON.stringify(user, null, 2)
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
