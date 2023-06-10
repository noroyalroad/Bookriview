import React, { Component } from 'react';

class BookHistory extends Component {
  render() {
    const { bookHistory } = this.props;
    console.log(bookHistory)
    return (
      <div>
        <h3>전에 봤던 도서들:</h3>
        <ul>
          {bookHistory.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookHistory;
