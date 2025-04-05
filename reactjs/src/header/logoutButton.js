import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { updateUserLogin } from "../redux/action/loginUser";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    googleLogout();
    dispatch(updateUserLogin({email: null}));
    localStorage.clear();
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default LogoutButton;