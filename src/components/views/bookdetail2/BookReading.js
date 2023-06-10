import React, { Component } from 'react';

const quotes = [
    "책을 읽는 것은 여행하는 것과 같다. - Victor Hugo",
    "독서는 생각의 과일원이다. - Joshua Logan",
    "가장 높은 목표는 책에서 삶의 의미를 찾는 것이다. - James Earl Jones",
    "책을 읽는 사람은 결코 외롭지 않다. - Carl Sagan",
    "책은 새로운 사람들과 대화하는 창구이다. - Plato",
    "책은 우리가 살 수 있는 가장 가까운 곳에 있는 친구이다. - Charles W. Eliot",
    "독서는 영혼을 키우는 양분이다. - Joseph Addison",
    "책을 읽는 사람은 두 번 사는 사람이다. - Cicero",
    "책은 마음의 미래를 빛내는 등불이다. - Lao Tzu",
    "한 권의 책은 수천 번의 대화를 담고 있다. - John K. Hutchens",
    "책을 읽을 수 있다는 것은 평생의 친구가 있다는 것과 같다. - Carlos Ruiz Zafón",
    "독서는 자유로운 사람을 만든다. - Oprah Winfrey",
    "독서는 우리의 마음을 여는 열쇠이다. - Mary McLeod Bethune",
    "책은 우리가 아는 것과 모르는 것 사이의 다리이다. - Anatole France",
    "책을 읽으면서 얻는 깊이 있는 삶은 그 자체로 보상이다. - Laura Ingalls Wilder",
    "독서는 재능을 가진 사람들의 상담이다. - Francis Bacon",
    "독서는 지식의 초대장이다. - Laura Bush",
    "책은 우리의 세상을 넓히고 우리의 생각을 깨우친다. - Helen Keller",
    "책은 우리가 변화하지 않으면 만나지 못하는 사람들과의 대화이다. - T.S. Eliot",
    "독서는 가장 확실한 행복의 원천이다. - Richard Steele",
];

class BookReading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quote: ''
        };
    }
    componentDidUpdate(prevProps) {//componentDidUpdate는(prevProps, prevState, snapshot)이 형태이기 때문에 매개변수를 토 ㅇ하여 이전 상태Props 가졍 ㅗㄹ수 있음
        if (prevProps.BookSelect !== this.props.BookSelect) {
            this.randomQuote()
        }
    }

    randomQuote = () => {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        const Quote = quotes[randomQuote];
        this.setState({ Quote });
    };

    render() {
        const { Quote } = this.state;
        return (
            <div>
                <p>{Quote}</p>
            </div>
        );
    }
}

export default BookReading;