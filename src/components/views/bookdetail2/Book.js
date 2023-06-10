import React, { Component } from "react";
import BookReview from "./BookReview";
import Booklist from "./Booklist";
import BookHistory from "./BookHistory"; // BookHistory 컴포넌트 임포트
import "./Book.css";
import BookReading from "./BookReading";
import Auth from "../../../hoc/auth";
import NavigationBar from "./Authmenu";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BookSelect: null,
      ReviewInput: false,
      booktitle: "",
      history: [], //history
    };
  }

  handleChildClick = (index, title) => {
    const { history } = this.state;
    const updatedHistory = [...history, title]; // 클릭한 도서 제목을 히스토리에 추가
    this.setState({
      BookSelect: index,
      ReviewInput: true,
      booktitle: title,
      history: updatedHistory, //history
    });
  };

  render() {
    const { BookSelect, ReviewInput, booktitle, history } = this.state;
    return (
      <>
        <div>
          <nav>
            <BookReading BookSelect={BookSelect} />
          </nav>
          <NavigationBar />
        </div>
        <main>
          <aside>
            <Booklist handleClick={this.handleChildClick} />
          </aside>
          <section>{ReviewInput && <BookReview bookIndex={BookSelect} booktitle={booktitle} />}</section>
          <article>
            <BookHistory bookHistory={history} /> {/*history*/}
          </article>
        </main>
        <footer style={{ textAlign: "center", padding: "10px" }}>
          백석대학교(주)
          <div style={{ marginTop: "10px" }}>
            개발자: 김현, 노형석, 민주훈, 장진혁
            <br />
            <br />
          </div>
        </footer>
      </>
    );
  }
}

export default Auth(Book, null);
