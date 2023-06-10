import React, { Component } from 'react';
import BookDetail from './BookDetail';
class BookReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [], // 리뷰를 저장할 배열
            reviewText: ''//리뷰 값 입력하는 상태값
        };
    }

    handleReviewSumbit = () => {
        const { reviewText } = this.state;
        const { bookIndex } = this.props;
    
        if (reviewText) {//값이 들어오면 실행하기
            const review = { text: reviewText, bookIndex };
            this.setState({
                reviews: [...this.state.reviews, review],//배열에 객체 넣음 나중에 map으로 분해
                reviewText: ''
            });
        }else{
            alert('리뷰를 입력하지 않았습니다.')
        }
    };
    
    handleInputChange = (e) => {
        this.setState({ reviewText: e.target.value });
        // console.log(e.target.value)
    };

    render() {
        const { reviews, reviewText } = this.state;
        const { bookIndex,booktitle } = this.props;
        const bookReviews = reviews.map((rv, index) => {
            if (rv.bookIndex === bookIndex) {
                return <li key={index}>{rv.text}</li>;
            }
            return null;
        });

        return (
            // 
            <div> 
                <h1>{booktitle} 책</h1>
                <BookDetail bookIndex ={bookIndex} booktitle={booktitle}/>
                <div>
                    리뷰 작성:
                    <textarea
                    placeholder='리뷰작성'
                        value={reviewText}//작성되면 초기화해서 이전값 없애기
                        onChange={this.handleInputChange}
                    />
                </div><br/>
                <button onClick={this.handleReviewSumbit}>리뷰 작성</button>

                <h2>{booktitle}책 리뷰</h2>
                {bookReviews.length > 0 ? <ul>{bookReviews}</ul> : <h3>리뷰가 없습니다.</h3>}
            </div>
        );
    }
}

export default BookReview;
