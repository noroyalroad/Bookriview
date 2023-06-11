import React, { Component } from "react";
import BookReview from "./BookReview";
import Booklist from "./Booklist";
import BookHistory from "./BookHistory";
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
    const updatedHistory = [...history, title];
    this.setState({
      BookSelect: index,
      ReviewInput: true,
      booktitle: title,
      history: updatedHistory,
    });
  };

  render() {
    const { BookSelect, ReviewInput, booktitle, history } = this.state;
    return (
      <>
        <div>
          <header>
            <NavigationBar />
          </header>

          <nav>
            <BookReading BookSelect={BookSelect} />
          </nav>
        </div>
        <main className="main-container">
          <aside className="booklist-container">
            사이드바
            <Booklist handleClick={this.handleChildClick} />
          </aside>
          <section className="bookreview-container">
            섹션
            {ReviewInput && <BookReview bookIndex={BookSelect} booktitle={booktitle} />}
          </section>
          <article className="bookhistory-container">
            아티클
            <BookHistory bookHistory={history} />
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

export default Book;
