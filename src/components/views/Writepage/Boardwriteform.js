import React, { useState } from "react";
import Auth from "../../../hoc/auth";
import Dropzone from "react-dropzone";

import Typography from "antd/es/typography/Typography";
import { Button, Form } from "react-bootstrap";
import { PlusOutlined } from "@ant-design/icons";

import axios from "axios";
import { useSelector } from "react-redux";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Title = Typography;

function BoardWriteForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate();

  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onContentHandler = (event) => {
    setContent(event.target.value);
  };

  const onImageUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("/api/upload", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let body = {
      writer: user.userData._id,
      title: title,
      content: content,
      imgPath: selectedImage,
    };
    console.log(body);

    axios
      .post("/api/write", body)
      .then((res) => {
        console.log(res.data);
        message.success("작성완료!");
        Navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>글 작성하기</Title>
      </div>

      <form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onSubmit={onSubmit}>
          <Dropzone onDrop={onImageUpload}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {selectedImage ? <img src={selectedImage} alt="미리보기" style={{ width: "100%", height: "100%" }} /> : <PlusOutlined style={{ fontSize: "3rem" }} />}
              </div>
            )}
          </Dropzone>

          <Form.Label>글 작성하기</Form.Label>
          <Form.Control type="text" placeholder="제목을 입력하세요" value={title} onChange={onTitleHandler} />
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} value={content} onChange={onContentHandler} />
          <Button variant="primary" type="submit" onSubmit={onSubmit}>
            작성하기
          </Button>
        </Form.Group>
      </form>
    </div>
  );
}

export default Auth(BoardWriteForm, true);
