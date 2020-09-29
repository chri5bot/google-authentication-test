import React from "react";
import MicrosoftLogin from "react-microsoft-login";

export default (props) => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <MicrosoftLogin
      clientId={"8ad4cce4-3d89-4c05-9062-28c3fbc33cfa"}
      authCallback={authHandler}
    />
  );
};
