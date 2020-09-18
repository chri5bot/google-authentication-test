import React from "react";
import { GoogleLogin } from "react-google-login";

const clientID =
  "894396863104-d6m90sv10i6tcms55rp89qhs8a01ujmf.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log(res);
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <GoogleLogin
      clientId={clientID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn
    />
  );
}

export default Login;
