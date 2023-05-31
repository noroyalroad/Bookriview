import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailhandler = (event) => {
    setemail(event.target.value);
  };

  const passwordhandler = (event) => {
    setpassword(event.target.value);
  };
  const onsubmithandler = (event) => {
    event.preventDefault();

    let body = {
      email: email,
      password: password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginsuccess) {
        navigate("/", { replace: true });
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        onSubmit={onsubmithandler}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={emailhandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={passwordhandler} />

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
