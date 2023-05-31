import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);

  const Logouthandler = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 상태입니다!");
      }
    });
  };

  return (
    <div>
      <h2>LandingPage</h2>
      <button onClick={Logouthandler}>Logout</button>
    </div>
  );
}

export default LandingPage;
