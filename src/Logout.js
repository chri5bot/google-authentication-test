import React from "react";
import { GoogleLogout } from "react-google-login";

const clientID =
  "894396863104-d6m90sv10i6tcms55rp89qhs8a01ujmf.apps.googleusercontent.com";

function Logout() {
  const onLogoutSuccess = () => {
    alert("Logout made successfully");
  };

  return (
    <GoogleLogout
      clientId={clientID}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    />
  );
}

export default Logout;
