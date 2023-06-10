import React, { Component } from "react";
import BookDetail from "./BookDetail";
import { connect } from "react-redux";

class BookReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [], // 리뷰를 저장할 배열
      reviewText: "", //리뷰 값 입력하는
      editingIndex: null, // 수정중인 리뷰를 인덱스에 저장
      editingText: "", // 수정중인 리뷰의 텍스트 저장
    };
  }

  handleReviewSumbit = () => {
    const { reviewText, editingIndex } = this.state;
    const { bookIndex } = this.props;

    if (reviewText) {
      const review = { text: reviewText, bookIndex };
      const updatedReviews = [...this.state.reviews];
      if (editingIndex !== null) {
        updatedReviews[editingIndex] = review;
        this.setState({
          reviews: updatedReviews,
          reviewText: "",
          editingIndex: null,
          editingText: "",
        });
      } else {
        updatedReviews.push(review);
        this.setState({
          reviews: updatedReviews,
          reviewText: "",
        });
      }
    } else {
      alert("리뷰를 입력하지 않았습니다.");
    }
  };
  /* this.setState({
                reviews: [...this.state.reviews, review],//배열에 객체 넣음 나중에 map으로 분해
                reviewText: ''
            }); */

  handleReviewEdit = (index) => {
    const { reviews } = this.state;
    const editingReview = reviews[index];
    this.setState({
      editingIndex: index,
      editingText: editingReview.text,
      reviewText: editingReview.text,
    });
  };

  handleReviewDelete = (index) => {
    const { reviews } = this.state;
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    this.setState({
      reviews: updatedReviews,
    });
  };

  handleInputChange = (e) => {
    const { user } = this.props;

    if (user.userData && !user.userData.isAuth) {
      alert("로그인 후 이용바람");
    }
    this.setState({ reviewText: e.target.value });
  };

  render() {
    const { reviews, reviewText, editingText } = this.state;
    const { bookIndex, booktitle } = this.props;

    const bookReviews = reviews.map((rv, index) => {
      if (rv.bookIndex === bookIndex) {
        return (
          <li key={index}>
            {rv.text}
            <button onClick={() => this.handleReviewEdit(index)}>수정</button>
            <button onClick={() => this.handleReviewDelete(index)}>삭제</button>
          </li>
        );
      }
      return null;
    });

    return (
      //
      <div style={{ textAlign: "center" }}>
        <h1>{booktitle} 책</h1>
        <BookDetail bookIndex={bookIndex} booktitle={booktitle} />

        <div>
          리뷰 작성:
          <textarea placeholder="리뷰작성" value={reviewText} onChange={this.handleInputChange} />
        </div>
        <br />
        <button onClick={this.handleReviewSumbit}>리뷰 작성</button>

        <h2>{booktitle}책 리뷰</h2>
        {bookReviews.length > 0 ? <ul>{bookReviews}</ul> : <h3>리뷰가 없습니다.</h3>}

        {editingText && (
          <div>
            <h3>리뷰 수정</h3>
            <textarea placeholder="리뷰 수정하기" value={editingText} onChange={(e) => this.setState({ editingText: e.target.value })} />
            <button onClick={this.handleReviewSubmit}>수정 완료</button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(BookReview);
