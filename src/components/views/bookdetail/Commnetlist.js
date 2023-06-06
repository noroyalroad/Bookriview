import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Commentlist(props) {
  return (
    <div>
      {console.log(props.com)}
      <ListGroup>
        <ListGroup.Item>
          <p>작성자:</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>작성자:</p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Commentlist;
