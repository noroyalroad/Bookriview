import React, { Component } from 'react';

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '',
        };
    }

    
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ searchTitle: value }, this.filterBooks);//값이 바뀔때 렌더링
    };

    filterBooks = () => {
        const { searchTitle } = this.state;
        const { booklists } = this.props;
        const filter = [];
        for (let i = 0; i < booklists.length; i++) {
            const book = booklists[i];
            if (book.title.includes(searchTitle)) {
                filter.push(book);
            }
        }
        this.props.updateBook(filter);
    };

    render() {
        const { searchTitle } = this.state;
        return (
            <div>
                <input style={{textAlign : 'center'}}
                    type="text"
                    value={searchTitle}
                    onChange={this.handleChange}
                    placeholder="도서 검색"
                />
            </div>
        );
    }
}

export default BookSearch;
