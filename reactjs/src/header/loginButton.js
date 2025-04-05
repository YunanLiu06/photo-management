import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUserLogin } from "../redux/action/loginUser";

const LoginButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          localStorage.setItem("token", credentialResponse.credential);
          const decoded = jwtDecode(credentialResponse.credential);
          dispatch(updateUserLogin(decoded));
        }}
        onError={() => {
          //TODO: add error page
        }}
      />
    </div>
  );
};

export default LoginButton;