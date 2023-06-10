import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";
import Button from "react-bootstrap/Button";
import { Card, Row, Col } from "react-bootstrap";
import { SelectedBook, searchquery } from "../../../_actions/book_action";
import { useDispatch, useSelector } from "react-redux";

function LandingPage() {
  const navigate = useNavigate();
  const qr = useSelector((state) => state.book.searchquery);

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

  const [query, setQuery] = useState("리액트");
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    axios
      .get("https://dapi.kakao.com/v3/search/book", {
        headers: { Authorization: "KakaoAK 3688ca49970c24d0db079b6c1dfb0721" },
        params: {
          query: query,
          size: 50,
        },
      })
      .then((res) => {
        setBooks(res.data.documents);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const bookclick = (books) => {
    console.log(books);
    dispatch(SelectedBook(books));
    localStorage.setItem("selecbook", JSON.stringify(books));

    Navigate("/book/detail");
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <h1>도서목록</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <Row xs={1} md={2} className="g-4">
        {books.map((item, idx) => (
          <Col key={idx}>
            <Card style={{ position: "relative" }} onClick={() => bookclick(item)}>
              <Card.Img variant="top" src={item.thumbnail} style={{ width: "50%" }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.contents}...</Card.Text>
                <Button>
                  상세보기
                  <a href={`/book/detail/${idx}`}></a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Button variant="primary" onClick={Logouthandler} style={{ position: "absolute", top: 0, right: 0 }}>
        Logout
      </Button>
    </div>
  );
}

export default Auth(LandingPage, null);
