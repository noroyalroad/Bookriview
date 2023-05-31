import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  const emailhandler = (event) => {
    setemail(event.target.value);
  };

  const passwordhandler = (event) => {
    setpassword(event.target.value);
  };
  const namehandler = (event) => {
    setname(event.target.value);
  };
  const confirmhandler = (event) => {
    setConfirmpassword(event.target.value);
  };

  const onsubmithandler = (event) => {
    event.preventDefault();
    if (password !== Confirmpassword) {
      return alert("비밀번호가 같지 않습니다!");
    }

    let body = {
      email: email,
      password: password,
      name: name,
      Confirmpassword: Confirmpassword,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login", { replace: true });
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

        <label>Name</label>
        <input type="text" value={name} onChange={namehandler} />

        <label>Password</label>
        <input type="password" value={password} onChange={passwordhandler} />

        <label>Confirm password</label>
        <input type="password" value={Confirmpassword} onChange={confirmhandler} />

        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default RegisterPage;
