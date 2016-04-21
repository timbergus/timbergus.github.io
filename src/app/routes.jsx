import { React, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { incrementCounter, decrementCounter } from './store/counter';

import Home from './home/index.jsx';

class HomeWrapper extends Component {
    
    render () {
        return (<Home txt="This is working just fine :)" />);
    }
};

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: bindActionCreators(incrementCounter, dispatch),
        decrementCounter: bindActionCreators(decrementCounter, dispatch)
    }
};

const NewHome = connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);

export default class Routes extends React.Component {

    render () {

        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ NewHome } />
            </Router>
        );
    }
}
