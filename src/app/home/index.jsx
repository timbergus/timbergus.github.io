import React from 'react';

class Home extends React.Component {

    constructor (props, context) {

        super(props, context);

        this.state = {
            txt: 'state message...'
        };
    }

    update () {

        setTimeout(() => {
            this.setState({
                txt: 'new state message :)'
            });
        }, 5000);
    }

    componentDidMount () {

        this.update();
    }

    render () {

        return (
            <div>
                <h1>Timbergus Site Under Construction!</h1>
                <p>This is a {this.props.txt}</p>
                <p>This is a {this.state.txt}</p>
                <p>Counter: { this.props.counter }</p>
                <button onClick={ this.props.incrementCounter }>+</button>
                <button onClick={ this.props.decrementCounter }>-</button>
            </div>
        );
    }
}

Home.propTypes = {
    txt: React.PropTypes.string.isRequired
};

Home.defaultProps = {
    txt: 'props message...'
};

export default Home;
