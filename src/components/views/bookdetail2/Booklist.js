import React, { Component } from "react";
import image1 from "../../../img/image1.png";
import image2 from "../../../img/image2.png";
import image3 from "../../../img/image3.png";
import image4 from "../../../img/image4.png";
import image5 from "../../../img/image5.png";
import image6 from "../../../img/image6.png";
import image7 from "../../../img/image7.png";

import BookSearch from "./BookSearch";
import Recomend from "./Recomend";

class Booklist extends Component {
  booklists = [
    { title: "Do it! 리액트 프로그래밍 정석", image: image1 },
    { title: "SpringBoot up & Running", image: image2 },
    { title: "HTMLCSS입문", image: image3 },
    { title: "자바스크립트는 왜 그 모양일까?", image: image4 },
    { title: "리액트를 다루는 기술", image: image5 },
    { title: "Node.js 교과서", image: image6 },
    { title: "Do it! 반응형 웹 페이지 만들기", image: image7 },
  ];

  constructor(props) {
    super(props);
    this.state = {
      list: this.booklists,
    };
  }

  updateBook = (filter) => {
    this.setState({ list: filter });
  };

  handleClick = (index) => {
    const { title } = this.state.list[index];
    this.props.handleClick(index, title);
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <BookSearch booklists={this.booklists} updateBook={this.updateBook} />
        <ul>
          {list.map((book, index) => (
            <li key={index}>
              <button style={{ height: 250, width: 200, margin: 10 }} onClick={() => this.handleClick(index)}>
                <img src={book.image} alt={book.title} style={{ height: "100%", width: "100%" }} />
              </button>
              <Recomend />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Booklist;
