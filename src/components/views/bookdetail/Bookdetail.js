import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { SelectedBook } from "../../../_actions/book_action";
import { useLocation, useParams } from "react-router-dom";
import Auth from "../../../hoc/auth";
import Comment from "./Comment";
import axios from "axios";
function Bookdetail(props) {
  const book = useSelector((state) => state.book);

  const dispatch = useDispatch();
  const location = useLocation();
  const { idx } = useParams();
  // const variable = user.userData._id;

  const [comments, setcomment] = useState([]);

  useEffect(() => {
    const storedBook = localStorage.getItem("selecbook");
    if (storedBook) {
      const parsedBook = JSON.parse(storedBook);
      dispatch(SelectedBook(parsedBook));
    }
  }, [dispatch]);

  useEffect(() => {
    if (book.selected) {
      localStorage.setItem("selecbook", JSON.stringify(book.selected));
    }
  }, [book.selected]);

  useEffect(() => {
    axios
      .post("/api/comment/getcomment")
      .then((res) => {
        console.log(res.data.comments);
        setcomment(res.data.comments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div style={{ marginRight: "20px" }}>
        <h1>상세보기</h1>
        {book.selected ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.selected.thumbnail} />
            <Card.Body>
              <Card.Title>{book.selected.title}</Card.Title>
              <Card.Text>{book.selected.contents}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <div>No book selected.</div>
        )}
      </div>
      <div>
        <Comment commentlist={comments} />
      </div>
    </div>
  );
}

export default Auth(Bookdetail, null);
