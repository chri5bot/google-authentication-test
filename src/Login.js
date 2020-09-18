import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";

const clientID =
  "894396863104-d6m90sv10i6tcms55rp89qhs8a01ujmf.apps.googleusercontent.com";

function Login() {
  const initialName = () => window.localStorage.getItem("name") || "";
  const [name, setName] = useState(initialName);

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  const onSuccess = (res) => {
    if (res.profileObj) {
      const { name } = res.profileObj;

      setName(name);

      alert(`Hey ${name},  You logged in successfully`);
    }
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return !name ? (
    <GoogleLogin
      clientId={clientID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn
    />
  ) : (
    <GoogleLogin
      clientId={clientID}
      onSuccess={onSuccess}
      buttonText={`Continue with google ${name}`}
      isSignedIn={true}
    />
  );
}

export default Login;
