import axios from "axios";
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";

const NavigationBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const Logouthandler = () => {
    axios.get("/api/users/logout").then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 상태입니다!");
      }
    });
  };

  const backgroundColor = user.userData && !user.userData.isAuth ? "#003399" : undefined;

  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor }}>
      <Navbar.Brand href="/">도서 리뷰 사이트</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {user.userData && !user.userData.isAuth ? (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Signup</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={Logouthandler}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Auth(NavigationBar, null);
