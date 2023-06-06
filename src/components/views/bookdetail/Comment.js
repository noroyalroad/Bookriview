import axios from "axios";
import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Commentlist from "./Commnetlist";

function Comment(props) {
  const [comment, setcomment] = useState("");
  const user = useSelector((state) => state.user);

  const commenthandle = (event) => {
    setcomment(event.target.value);
  };
  const onsubmit = (event) => {
    event.preventDefault();

    const body = {
      content: comment,
      writer: user.userData._id,
    };
    axios
      .post("/api/comment/savecomment", body)
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <p>리뷰</p>
      {/* {console.log(props.commentlist)} */}
      <Commentlist com={props.commentlist}></Commentlist>
      <InputGroup className="mb-3" onSubmit={onsubmit}>
        <Form.Control placeholder="댓글을 입력하세요" style={{ width: "500px" }} onChange={commenthandle} value={comment} />
        <Button variant="outline-secondary" onClick={onsubmit}>
          입력
        </Button>
      </InputGroup>
    </div>
  );
}

export default Comment;
