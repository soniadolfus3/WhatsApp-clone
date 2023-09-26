import React, { useEffect } from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { Button } from "@mui/material";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  // Check for login status in localStorage when the component mounts
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      // User is logged in, dispatch action to set user
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
      }
    }
  }, [dispatch]);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Store the user data in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(result.user));

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
